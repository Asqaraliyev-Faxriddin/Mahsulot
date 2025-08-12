import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { TelegramInterceptor } from './common/interceptors/bot.intervertors';
import * as fs from "fs"

async function bootstrap() {
  

  const httpsOptions = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.enableCors()
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true
  }))


  const config = new DocumentBuilder()
  .setTitle("Learning-Management-System")
  .setVersion("1")
  .addBearerAuth()
  .build()


  app.useGlobalInterceptors(new TelegramInterceptor());

  let document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup("swagger",app,document)
  
  
  
  
  await app.listen(process.env.POR ?? 3000);
  console.log(`http://localhost:${process.env.POR || 3000}`);
  

}

bootstrap();



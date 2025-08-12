import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module';
import { AuthModule } from './modules/Auth/auth.module';
import { UserModule } from './modules/user/user.module';

import { SeaderModule } from './core/seader/seader.module';
import { RedisModule } from './core/redis/redis.module';
import { VerificationModule } from './modules/verification/verification.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [

   

    PrismaModule ,AuthModule,VerificationModule,UserModule, 
 SeaderModule,RedisModule, ProductModule, 
    
  ],
})
export class AppModule { }

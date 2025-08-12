import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccesToken } from 'src/common/config/jwt';

@Module({
  imports:[JwtModule.register(JwtAccesToken)],
  controllers: [ProductController],
  providers: [ProductService,AuthGuard],
})
export class ProductModule {}

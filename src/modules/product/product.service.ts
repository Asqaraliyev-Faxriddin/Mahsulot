import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto, userId: string) {
    const user = await this.prisma.users.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const jamiNarx = data.narx * data.miqdor;

    return this.prisma.product.create({
      data: {
        ...data,
        jamiNarx,
        userId,
      },
    });
  }

  async checksotil(id:number,userId:string){


    let data = await this.prisma.product.update({
      where:{
        id,
        userId
      },
      data:{
        sotildimi:true
      }
    })

    if(!data){
      throw new NotFoundException("Product Not found")
    }

    return data
  }


  async findAllByUser(userId: string) {
    const products = await this.prisma.product.findMany({
      where: { userId },
    });

    return products.map(p => ({
      ...p,
      jamiNarx: p.narx * p.miqdor,
    }));
  }

  // Foydalanuvchi faqat o'z mahsulotini olishi
  async findOneByUser(id: number, userId: string) {
    const product = await this.prisma.product.findFirst({
      where: { id, userId },
    });
    if (!product) throw new NotFoundException('Product not found or access denied');

    return {
      ...product,
      jamiNarx: product.narx * product.miqdor,
    };
  }

  // Foydalanuvchi faqat o'z mahsulotini yangilashi mumkin
  async updateByUser(id: number, data: UpdateProductDto, userId: string) {
    const product = await this.prisma.product.findFirst({
      where: { id, userId },
    });
    if (!product) throw new NotFoundException('Product not found or access denied');

    const updatedData = {
      ...data,
      jamiNarx: (data.narx ?? product.narx) * (data.miqdor ?? product.miqdor),
    };

    return this.prisma.product.update({
      where: { id },
      data: updatedData,
    });
  }

  // Foydalanuvchi faqat o'z mahsulotini o'chirishi mumkin
  async removeByUser(id: number, userId: string) {
    const product = await this.prisma.product.findFirst({
      where: { id, userId },
    });
    if (!product) throw new NotFoundException('Product not found or access denied');

    return this.prisma.product.delete({ where: { id } });
  }
}

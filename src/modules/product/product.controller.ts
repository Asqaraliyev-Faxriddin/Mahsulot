import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';

@ApiTags('Products')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: "Foydalanuvchi o'z mahsulotini yaratadi" })
  @ApiResponse({ status: 201, description: 'Mahsulot muvaffaqiyatli yaratildi.' })
  async create(@Body() data: CreateProductDto, @Req() req) {
    const userId = req.user.id;
    return this.productService.create(data, userId);
  }

  @Get()
  @ApiOperation({ summary: "Foydalanuvchining barcha mahsulotlarini olish" })
  @ApiResponse({ status: 200, description: 'Mahsulotlar ro‘yxati.' })
  async findAll(@Req() req) {
    const userId = req.user.id;
    return this.productService.findAllByUser(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: "Foydalanuvchining bitta mahsulotini olish" })
  @ApiResponse({ status: 200, description: 'Mahsulot ma‘lumotlari.' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi.' })
  async findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const userId = req.user.id;
    return this.productService.findOneByUser(id, userId);
  }

  @Put('check_S/:id')
  @ApiOperation({ summary: "Foydalanuvchining bitta mahsulotni sotildi deyishi" })
  async sotil(@Param('id', ParseIntPipe) id: number, @Req() req) {
    let userId = req.user.id
    return this.productService.checksotil(id,userId);
  }


  @Put(':id')
  @ApiOperation({ summary: "Foydalanuvchi o'z mahsulotini yangilaydi" })
  @ApiResponse({ status: 200, description: 'Mahsulot muvaffaqiyatli yangilandi.' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi yoki ruxsat yo‘q.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProductDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.productService.updateByUser(id, data, userId);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Foydalanuvchi o'z mahsulotini o'chiradi" })
  @ApiResponse({ status: 200, description: 'Mahsulot muvaffaqiyatli o‘chirildi.' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi yoki ruxsat yo‘q.' })
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const userId = req.user.id;
    return this.productService.removeByUser(id, userId);
  }
}

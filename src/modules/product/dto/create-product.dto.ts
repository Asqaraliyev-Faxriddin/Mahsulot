import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsPositive, Min, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Kompyuter' })
  @IsString()
  nom: string;

  @ApiPropertyOptional({ example: 'Yangi model, kuchli protsessor' })
  @IsOptional()
  @IsString()
  tavsif?: string;

  @IsNotEmpty()
  @IsString()
    kimga:string

  @ApiProperty({ example: 2500 })
  @IsNumber()
  @IsPositive()
  narx: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(0)
  miqdor: number;


}

export class UpdateProductDto {
  @ApiPropertyOptional({ example: 'Kompyuter' })
  @IsOptional()
  @IsString()
  nom?: string;

  @ApiPropertyOptional({ example: 'Yangi model, kuchli protsessor' })
  @IsOptional()
  @IsString()
  tavsif?: string;

  @ApiPropertyOptional({ example: 2500 })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  narx?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  miqdor?: number;
}

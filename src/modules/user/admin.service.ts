import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto, CreateAssistantDto, CreateMentorDto, UpdateMentorDto,  } from './dto/update-user.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';
import * as bcrypt from "bcrypt" 

@Injectable()
export class AdminService {
  constructor(private prisma:PrismaService){}


    async create_admin(payload:CreateAdminDto){

        let {phone,fullName,password} = payload

        let checkphone = await this.prisma.users.findUnique({where:{phone}}) 
        if(checkphone) throw new ConflictException("phone already used")

        let hash = await bcrypt.hash(password,10)
        let data = await this.prisma.users.create({
            data:{
                role:"ADMIN",
                password:hash,
                fullName,
                phone
            }
        })

        let oldUser = await this.prisma.users.findFirst(
            {
                where:{
                    phone
                },
                include:{
                  products:true
                }
               
        })
        return {
            status:true,
            message:"Created user",
            data:oldUser
        }

    }









      async AdminDelete(id:string){


        let olduser = await this.prisma.users.findFirst({where:{id,role:"ADMIN"}})
        if(!olduser) throw new NotFoundException("Admin not found")
      
      
         await this.prisma.users.delete({
          where:{id}
        })
      
      
          return {
            succase:true,
            message:"Succase Admin delete"
          }
      }

      
 



}
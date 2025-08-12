import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { MentorsAllDto, UsersAllDto } from './dto/create-user.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { contains } from 'class-validator';
import { waitForDebugger } from 'inspector';

@Injectable()
export class UserService {
  constructor(private prisma:PrismaService){}

  async UsersAll(payload:UsersAllDto){

    let {fullName,offset=1,limit=10,search,phone} = payload

    let filter:any = []

    if(fullName){
      filter.push({
      fullName:{
      contains:fullName,
      mode:"insensitive"
       }
       })
    }
     if(phone){
      filter.push({
      phone:{
      contains:phone,
      mode:"insensitive"
         }
         })
        }

        let whereFilter: any = {
          role: 'STUDENT',
        };
        if (filter.length) {
          whereFilter.OR = filter;
        }


    let data = await this.prisma.users.findMany({
      where:whereFilter,


      include:{
      products:true
        
      },
      skip:(offset-1) *limit,
      take:limit,
      orderBy:{
        createdAt:"asc"
      }
      
    })

    return data
  }


  async UserOne(id:string){
    

    let oldUser = await this.prisma.users.findFirst({
      where:{id,role:"STUDENT"},
        
          include:{
          products:true
          }
        
      

    })

    if(!oldUser) throw new NotFoundException("User not found")

    return oldUser
  }


  async UserPhone(phone:string){
    
    console.log(phone);
    
    let oldUser = await this.prisma.users.findFirst({
      where:{phone,role:"STUDENT"},
        
          include:{
   products:true
          }
        
      

    })

    

    if(!oldUser) throw new NotFoundException("User not found")

    return oldUser
  }



async UserDelete(id:string){


  let olduser = await this.prisma.users.findFirst({where:{id,role:"STUDENT"}})
  if(!olduser) throw new NotFoundException("User not found")


   await this.prisma.users.delete({
    where:{id}
  })


    return {
      succase:true,
      message:"Succase user delete"
    }
}


async olduser(id:string){
  let data = await this.prisma.users.findFirst({
    where:{
      id
    },

    include:{
    products:true
    }

  
    
  })

  if(!data) throw new ConflictException("User register")

    return data
    }



}

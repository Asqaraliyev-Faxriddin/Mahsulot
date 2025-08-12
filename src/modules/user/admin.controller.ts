import { Body, Controller,Delete,Param, ParseUUIDPipe, Patch, Post, UseGuards} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto,CreateAssistantDto,CreateMentorDto,UpdateMentorDto} from "./dto/update-user.dto";
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from "@nestjs/swagger";
import { UserRole } from "@prisma/client";
import { Roles } from "src/common/decorators/Roles.decorator";
import { AuthGuard } from "src/common/guards/jwt-auth.guard";
import { RolesGuard } from "src/common/guards/roles.guard";

@ApiTags("Admin")
@ApiBearerAuth()
@Controller("api/users")
@UseGuards(AuthGuard, RolesGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("create/admin")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Yangi admin yaratish (faqat ADMIN)" })
  createAdmin(@Body() payload: CreateAdminDto) {
    return this.adminService.create_admin(payload);
  }




  @Delete("admin/delete/:id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Adminni o'chirish (faqat ADMIN)" })
  @ApiParam({ name: "id", description: "User ID" })
  AdminDelete(@Param("id", ParseUUIDPipe) id: string) {
    return this.adminService.AdminDelete(id);
  }


}


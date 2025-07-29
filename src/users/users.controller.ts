/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/await-thenable */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateBuyerUserDto, CreateSellerUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("seller")
  async createSeller(@Body() createSellerUserDto: CreateSellerUserDto) {
    return await this.usersService.createSeller(createSellerUserDto);
  }

  @Post("buyer")
  async createBuyer(@Body() createBuyerUserDto: CreateBuyerUserDto) {
    return await this.usersService.createBuyer(createBuyerUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}

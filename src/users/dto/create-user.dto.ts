/* eslint-disable prettier/prettier */

import { IsArray, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Full name is required" })
  @IsString({ message: "Full name must be a string" })
  fullName: string;

  @IsNotEmpty({ message: "Phone number is required" })
  @IsString({ message: "Phone number must be a string" })
  @Length(11, 11, { message: "Phone number must be exactly 11 digits" })
  phoneNumber: string;

  @IsNotEmpty({ message: "Address is required" })
  @IsString({ message: "Address must be a string" })
  address: string;

  @IsNotEmpty({ message: "Role is required" })
  @IsArray({ message: "Role must be a Array" })
  roles: string[];
}

export class CreateBuyerUserDto extends CreateUserDto {}

export class CreateSellerUserDto extends CreateUserDto {
  @IsNotEmpty({ message: "Seller type is required" })
  @IsArray({ message: "Seller type must be a array" })
  sellerType: string[];
}

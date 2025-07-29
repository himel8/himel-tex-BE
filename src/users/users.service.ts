/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateBuyerUserDto, CreateSellerUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { Roles, SellerType } from "src/utility/common/user-roles.enum";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createSeller(
    createSellerUserDto: CreateSellerUserDto,
  ): Promise<UserEntity> {
    const userExists = await this.findUserByName(
      createSellerUserDto.phoneNumber,
    );
    if (userExists) {
      throw new BadRequestException("User with this number already exists");
    }

    const user = this.usersRepository.create(createSellerUserDto);
    if (!user.roles.includes(Roles.SELLER)) {
      throw new BadRequestException("Role must be seller");
    }
    const isValid = isValidSellerTypeArray(user.sellerType);
    if (!isValid) {
      throw new BadRequestException("Invalid seller type provided");
    }

    return await this.usersRepository.save(user);
  }

  async createBuyer(
    createBuyerUserDto: CreateBuyerUserDto,
  ): Promise<UserEntity> {
    const userExists = await this.findUserByName(
      createBuyerUserDto.phoneNumber,
    );
    if (userExists) {
      throw new BadRequestException("User with this number already exists");
    }

    const user = this.usersRepository.create(createBuyerUserDto);
    if (!user.roles.includes(Roles.BUYER)) {
      throw new BadRequestException("Role must be buyer");
    }
    return await this.usersRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByName(phoneNumber: string) {
    return await this.usersRepository.findOneBy({ phoneNumber });
  }
}

function isValidSellerTypeArray(sellerTypes: string[] | null): boolean {
  if (!sellerTypes) return false;
  const validSellerTypes = Object.values(SellerType);
  return sellerTypes.every((type) =>
    validSellerTypes.includes(type as SellerType),
  );
}

/* eslint-disable prettier/prettier */
import { Roles, SellerType } from "src/utility/common/user-roles.enum";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  address: string;

  @Column({
    type: "enum",
    enum: Roles,
    array: true,
  })
  roles: string[];

  @Column({ type: "enum", enum: SellerType, array: true, nullable: true })
  sellerType: string[] | null;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  balance: number;

  @Column({ type: "varchar", nullable: true })
  profilePicture: string | null;

  @CreateDateColumn()
  createdAt: Timestamp;
  @UpdateDateColumn()
  updatedAt: Timestamp;
}

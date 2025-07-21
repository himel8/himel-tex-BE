/* eslint-disable prettier/prettier */
import { Roles, SellerType } from "src/utility/common/user-roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  fullName: string;
  @Column()
  phoneNumber: string;
  @Column()
  address: string;
  @Column({ type: "enum", enum: Roles, default: Roles.BUYER })
  roles: Roles[];
  @Column({ type: "enum", enum: SellerType, nullable: true })
  sellerType: SellerType | null;
  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  balance: number;
  @Column({ type: "varchar", nullable: true })
  profilePicture: string | null;
}

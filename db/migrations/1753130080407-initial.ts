import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1753130080407 implements MigrationInterface {
    name = 'Initial1753130080407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "address" character varying NOT NULL, "roles" "public"."users_roles_enum" NOT NULL DEFAULT 'buyer', "sellerType" "public"."users_sellertype_enum", "balance" numeric(10,2) NOT NULL DEFAULT '0', "profilePicture" character varying, CONSTRAINT "UQ_4b2bf18167e94dce386d714c67f" UNIQUE ("fullName"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

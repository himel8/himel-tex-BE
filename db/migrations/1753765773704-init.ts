import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1753765773704 implements MigrationInterface {
    name = 'Init1753765773704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "address" character varying NOT NULL, "roles" "public"."users_roles_enum" array NOT NULL, "sellerType" "public"."users_sellertype_enum" array, "balance" numeric(10,2) NOT NULL DEFAULT '0', "profilePicture" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293" UNIQUE ("phoneNumber"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

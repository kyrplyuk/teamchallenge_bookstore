import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntites11691073590760 implements MigrationInterface {
    name = 'AddedEntites11691073590760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."categories_status_enum" RENAME TO "categories_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."categories_status_enum" AS ENUM('indefined', 'picturebooks', 'fiction', 'education', 'nature', 'myths', 'activities', 'comics')`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "status" TYPE "public"."categories_status_enum" USING "status"::"text"::"public"."categories_status_enum"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "status" SET DEFAULT 'indefined'`);
        await queryRunner.query(`DROP TYPE "public"."categories_status_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."categories_status_enum_old" AS ENUM('child', 'youngAdult', 'crime')`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "status" TYPE "public"."categories_status_enum_old" USING "status"::"text"::"public"."categories_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "status" SET DEFAULT 'child'`);
        await queryRunner.query(`DROP TYPE "public"."categories_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."categories_status_enum_old" RENAME TO "categories_status_enum"`);
    }

}

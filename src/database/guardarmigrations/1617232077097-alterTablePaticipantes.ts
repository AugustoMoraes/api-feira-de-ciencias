import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTablePaticipantes1617232077097 implements MigrationInterface {
    name = 'alterTablePaticipantes1617232077097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participantes" ADD "tipo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "participantes" ADD "idade" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "participantes" ADD "escola" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participantes" DROP COLUMN "escola"`);
        await queryRunner.query(`ALTER TABLE "participantes" DROP COLUMN "idade"`);
        await queryRunner.query(`ALTER TABLE "participantes" DROP COLUMN "tipo"`);
    }

}

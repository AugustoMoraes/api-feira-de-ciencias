import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableAvaliacaoProjeto1617464932002 implements MigrationInterface {
    name = 'createTableAvaliacaoProjeto1617464932002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avaliacao-projeto" ("id" character varying NOT NULL, "banner" integer NOT NULL, "postura" integer NOT NULL, "organizacao" integer NOT NULL, "explicacao" integer NOT NULL, "dominioAssunto" integer NOT NULL, "relevancia" integer NOT NULL, CONSTRAINT "PK_cae09b6b182d2daa6db1f947cc4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "avaliacao-projeto"`);
    }

}

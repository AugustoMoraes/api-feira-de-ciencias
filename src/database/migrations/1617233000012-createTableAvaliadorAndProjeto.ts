import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableAvaliadorAndProjeto1617233000012 implements MigrationInterface {
    name = 'createTableAvaliadorAndProjeto1617233000012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avaliadores" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "usuario" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "PK_48822b9db6eef12bfee9bb18672" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projetos" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_fb6b6aed4b30e10b976fe8bdf5b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projetos"`);
        await queryRunner.query(`DROP TABLE "avaliadores"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class relationAvaliacaoProjeto1617466697367 implements MigrationInterface {
    name = 'relationAvaliacaoProjeto1617466697367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" ADD "projetoId" character varying`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" ADD "avaliadorId" character varying`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" ADD CONSTRAINT "FK_67a470f92ceadbd47601f651d50" FOREIGN KEY ("projetoId") REFERENCES "projetos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" ADD CONSTRAINT "FK_f8d68ec3f535dc1f2eab57897ec" FOREIGN KEY ("avaliadorId") REFERENCES "avaliadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" DROP CONSTRAINT "FK_f8d68ec3f535dc1f2eab57897ec"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" DROP CONSTRAINT "FK_67a470f92ceadbd47601f651d50"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" DROP COLUMN "avaliadorId"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" DROP COLUMN "projetoId"`);
    }

}

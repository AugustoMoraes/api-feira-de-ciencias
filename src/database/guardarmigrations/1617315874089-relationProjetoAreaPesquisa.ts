import {MigrationInterface, QueryRunner} from "typeorm";

export class relationProjetoAreaPesquisa1617315874089 implements MigrationInterface {
    name = 'relationProjetoAreaPesquisa1617315874089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projetos" ADD "areaPesquisaId" character varying`);
        await queryRunner.query(`ALTER TABLE "projetos" ADD CONSTRAINT "FK_0c1c0d425404c251f1851dd44a0" FOREIGN KEY ("areaPesquisaId") REFERENCES "areas_pesquisa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projetos" DROP CONSTRAINT "FK_0c1c0d425404c251f1851dd44a0"`);
        await queryRunner.query(`ALTER TABLE "projetos" DROP COLUMN "areaPesquisaId"`);
    }

}

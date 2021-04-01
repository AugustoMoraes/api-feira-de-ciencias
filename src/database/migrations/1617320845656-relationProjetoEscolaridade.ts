import {MigrationInterface, QueryRunner} from "typeorm";

export class relationProjetoEscolaridade1617320845656 implements MigrationInterface {
    name = 'relationProjetoEscolaridade1617320845656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projetos" ADD "escolaridadeId" character varying`);
        await queryRunner.query(`ALTER TABLE "projetos" ADD CONSTRAINT "FK_120f14291a0bdec0ac3ac379b91" FOREIGN KEY ("escolaridadeId") REFERENCES "escolaridades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projetos" DROP CONSTRAINT "FK_120f14291a0bdec0ac3ac379b91"`);
        await queryRunner.query(`ALTER TABLE "projetos" DROP COLUMN "escolaridadeId"`);
    }

}

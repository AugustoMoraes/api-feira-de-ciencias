import {MigrationInterface, QueryRunner} from "typeorm";

export class relationProjetoParticipante1617321716031 implements MigrationInterface {
    name = 'relationProjetoParticipante1617321716031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participantes" ADD "projetoId" character varying`);
        await queryRunner.query(`ALTER TABLE "participantes" ADD CONSTRAINT "FK_14ef7de0fb7301b133fa15ca88c" FOREIGN KEY ("projetoId") REFERENCES "projetos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "participantes" DROP CONSTRAINT "FK_14ef7de0fb7301b133fa15ca88c"`);
        await queryRunner.query(`ALTER TABLE "participantes" DROP COLUMN "projetoId"`);
    }

}

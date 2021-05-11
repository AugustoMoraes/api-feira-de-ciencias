import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableParticipantes1617231780978 implements MigrationInterface {
    name = 'createTableParticipantes1617231780978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "participantes" ("id" character varying NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_054c31239bbbe863559550031e4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "participantes"`);
    }

}

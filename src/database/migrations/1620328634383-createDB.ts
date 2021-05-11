import {MigrationInterface, QueryRunner} from "typeorm";

export class createDB1620328634383 implements MigrationInterface {
    name = 'createDB1620328634383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avaliadores" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "usuario" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "PK_48822b9db6eef12bfee9bb18672" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "avaliacao-projeto" ("id" character varying NOT NULL, "banner" integer NOT NULL, "postura" integer NOT NULL, "organizacao" integer NOT NULL, "explicacao" integer NOT NULL, "dominioAssunto" integer NOT NULL, "relevancia" integer NOT NULL, "projetoId" character varying, "avaliadorId" character varying, CONSTRAINT "PK_cae09b6b182d2daa6db1f947cc4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "escolaridades" ("id" character varying NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_a9f76fdfbde52ccf2ea44e14070" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "participantes" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "tipo" character varying NOT NULL, "idade" integer NOT NULL, "escola" character varying NOT NULL, "projetoId" character varying, CONSTRAINT "PK_054c31239bbbe863559550031e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projetos" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "areaPesquisaId" character varying, "escolaridadeId" character varying, CONSTRAINT "PK_fb6b6aed4b30e10b976fe8bdf5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "areas_pesquisa" ("id" character varying NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_b04b3e290762f8edfb5835e687e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" ADD CONSTRAINT "FK_67a470f92ceadbd47601f651d50" FOREIGN KEY ("projetoId") REFERENCES "projetos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" ADD CONSTRAINT "FK_f8d68ec3f535dc1f2eab57897ec" FOREIGN KEY ("avaliadorId") REFERENCES "avaliadores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "participantes" ADD CONSTRAINT "FK_14ef7de0fb7301b133fa15ca88c" FOREIGN KEY ("projetoId") REFERENCES "projetos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projetos" ADD CONSTRAINT "FK_0c1c0d425404c251f1851dd44a0" FOREIGN KEY ("areaPesquisaId") REFERENCES "areas_pesquisa"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projetos" ADD CONSTRAINT "FK_120f14291a0bdec0ac3ac379b91" FOREIGN KEY ("escolaridadeId") REFERENCES "escolaridades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projetos" DROP CONSTRAINT "FK_120f14291a0bdec0ac3ac379b91"`);
        await queryRunner.query(`ALTER TABLE "projetos" DROP CONSTRAINT "FK_0c1c0d425404c251f1851dd44a0"`);
        await queryRunner.query(`ALTER TABLE "participantes" DROP CONSTRAINT "FK_14ef7de0fb7301b133fa15ca88c"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" DROP CONSTRAINT "FK_f8d68ec3f535dc1f2eab57897ec"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-projeto" DROP CONSTRAINT "FK_67a470f92ceadbd47601f651d50"`);
        await queryRunner.query(`DROP TABLE "areas_pesquisa"`);
        await queryRunner.query(`DROP TABLE "projetos"`);
        await queryRunner.query(`DROP TABLE "participantes"`);
        await queryRunner.query(`DROP TABLE "escolaridades"`);
        await queryRunner.query(`DROP TABLE "avaliacao-projeto"`);
        await queryRunner.query(`DROP TABLE "avaliadores"`);
    }

}

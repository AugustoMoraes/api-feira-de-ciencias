import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEscolaridade1617145736992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "escolaridades",
                columns:[
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('escolaridades')
    }

}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1642622603508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                         name: "id",
                         type: "uuid",
                         isPrimary: true   
                    },
                    {
                         name: "name",
                         type: "varchar"   
                    },
                    {
                         name: "crm",
                         type: "int"   
                    },
                    {
                         name: "tel",
                         type: "int"   
                    },
                    {
                         name: "cep",
                         type: "int"   
                    },
                    {
                         name: "cel",
                         type: "int"   
                    },
                    {
                         name: "specialty",
                         type: "varchar"   
                    },
                    {
                         name: "created_at",
                         type: "timestamp",
                         default: "now()"  
                    }
                ]}
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}

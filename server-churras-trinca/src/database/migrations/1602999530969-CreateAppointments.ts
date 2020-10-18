import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1602999530969
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider_id',
            type: 'varchar',
            isNullable: false,
            generationStrategy: 'uuid',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'total_meat',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'total_drinks',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'total_price',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'total_participants',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}

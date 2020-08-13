import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClassSchedules extends BaseSchema {
  protected tableName = 'class_schedules'

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id')
      table.integer('week_day').notNullable()
      table.integer('from').notNullable()
      table.integer('to').notNullable()
      table.timestamps(true)

      table
        .integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Connections extends BaseSchema {
  protected tableName = 'connections'

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id')
      table.timestamps(true)

      table
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Classes extends BaseSchema {
  protected tableName = 'classes'

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id')
      table.string('subject').notNullable()
      table.decimal('cost').notNullable()
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

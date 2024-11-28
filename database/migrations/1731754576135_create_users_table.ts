import { UserRole } from '#models/user'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('first_name').index().notNullable()
      table.string('last_name').nullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.string('phone_number').nullable()
      table.enum('role', Object.values(UserRole)).notNullable()
      table.timestamp('password_last_updated_at').nullable()
      table.timestamps(false, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

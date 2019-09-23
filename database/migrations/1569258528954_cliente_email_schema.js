'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteEmailSchema extends Schema {
  up() {
    this.create('cliente_emails', table => {
      table.increments()
      table
        .integer('id_cliente')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('id_email')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('emails')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('cliente_emails')
  }
}

module.exports = ClienteEmailSchema

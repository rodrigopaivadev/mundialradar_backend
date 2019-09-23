'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteTelefoneSchema extends Schema {
  up() {
    this.create('cliente_telefones', table => {
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
        .integer('id_telefone')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('telefones')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
      table.timestamps()
    })
  }

  down() {
    this.drop('cliente_telefones')
  }
}

module.exports = ClienteTelefoneSchema

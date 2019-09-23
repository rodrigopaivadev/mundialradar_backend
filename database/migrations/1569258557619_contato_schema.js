'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatoSchema extends Schema {
  up() {
    this.create('contatos', table => {
      table.string('nome').notNullable()
      table.string('telefone').notNullable()
      table
        .integer('id_cliente')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('contatos')
  }
}

module.exports = ContatoSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatoSchema extends Schema {
  up () {
    this.create('contatoes', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('telefone').notNullable()
      table
        .integer('cliente_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('contatoes')
  }
}

module.exports = ContatoSchema

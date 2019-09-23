'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanoSchema extends Schema {
  up() {
    this.create('planos', table => {
      table.increments()
      table.string('descricao').notNullable()
      table.string('valor').notNullable()
      table.string('tipo').notNullable()
      table.string('status').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('planos')
  }
}

module.exports = PlanoSchema

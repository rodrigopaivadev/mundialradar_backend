'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContratoSchema extends Schema {
  up () {
    this.create('contratos', table => {
      table.increments()
      table
        .integer('cliente_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('veiculo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('veiculos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('plano_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('planos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('contratos')
  }
}

module.exports = ContratoSchema

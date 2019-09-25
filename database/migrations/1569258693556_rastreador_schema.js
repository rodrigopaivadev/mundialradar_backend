'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RastreadorSchema extends Schema {
  up () {
    this.create('rastreadores', table => {
      table.increments()
      table
        .string('imei')
        .notNullable()
        .unique()
      table.string('modelo').notNullable()
      table.string('fabricante').notNullable()
      table
        .enu('status', ['ativo', 'inativo', 'cancelado', 'defeito', 'cancelar'])
        .notNullable()
      table.boolean('oficina').notNullable()
      table
        .integer('chip_id')
        .unsigned()
        .unique()
        .nullable()
        .references('id')
        .inTable('chips')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('rastreadores')
  }
}

module.exports = RastreadorSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VeiculoSchema extends Schema {
  up () {
    this.create('veiculos', table => {
      table.increments()
      table.string('fabricante').nullable()
      table.string('modelo').nullable()
      table.string('placa').notNullable()
      table.string('cor').nullable()
      table.string('chassi').nullable()
      table.string('renavam').nullable()
      table.string('combustivel').nullable()
      table.string('identificacao').nullable()
      table.boolean('possui_bloqueio').notNullable()
      table.text('descricao_bloqueio').nullable()
      table.text('local_equipamento').nullable()
      table.text('observacao').nullable()
      table
        .integer('grupo_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('grupos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('rastreador_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('rastreadores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('veiculos')
  }
}

module.exports = VeiculoSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up() {
    this.create('clientes', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('apelido').nullable()
      table.string('pessoa').notNullable()
      table.string('documento').notNullable()
      table.string('rg').nullable()
      table.string('orgao_expedidor').nullable()
      table.date('nascimento').nullable()
      table.string('logradouro').nullable()
      table.string('numero').nullable()
      table.string('complemento').nullable()
      table.string('bairro').nullable()
      table.string('cidade').nullable()
      table.string('estado').nullable()
      table.string('cep').nullable()
      table.string('status').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema

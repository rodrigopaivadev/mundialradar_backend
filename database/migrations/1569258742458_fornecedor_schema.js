'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedores', table => {
      table.increments()
      table.string('nome').notNullable()
      table.string('email').nullable()
      table.string('telefone').notNullable()
      table.string('documento').notNullable()
      table.string('tipo_documento').notNullable()
      table.string('endereco').nullable()
      table.string('numero').nullable()
      table.string('bairro').nullable()
      table.string('complemento').nullable()
      table.string('cidade').nullable()
      table.string('cep').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedores')
  }
}

module.exports = FornecedorSchema

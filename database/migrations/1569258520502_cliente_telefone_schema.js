'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteTelefoneSchema extends Schema {
  up () {
    this.create('cliente_telefones', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cliente_telefones')
  }
}

module.exports = ClienteTelefoneSchema

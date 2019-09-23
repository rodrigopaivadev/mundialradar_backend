'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedors')
  }
}

module.exports = FornecedorSchema

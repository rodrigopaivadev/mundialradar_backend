'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContratoSchema extends Schema {
  up () {
    this.create('contratoes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('contratoes')
  }
}

module.exports = ContratoSchema

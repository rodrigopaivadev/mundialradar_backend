'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanoSchema extends Schema {
  up () {
    this.create('planos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('planos')
  }
}

module.exports = PlanoSchema

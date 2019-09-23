'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RastreadorSchema extends Schema {
  up () {
    this.create('rastreadors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('rastreadors')
  }
}

module.exports = RastreadorSchema

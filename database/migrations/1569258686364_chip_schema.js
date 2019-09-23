'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChipSchema extends Schema {
  up () {
    this.create('chips', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('chips')
  }
}

module.exports = ChipSchema

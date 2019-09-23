'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteEmailSchema extends Schema {
  up () {
    this.create('cliente_emails', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cliente_emails')
  }
}

module.exports = ClienteEmailSchema

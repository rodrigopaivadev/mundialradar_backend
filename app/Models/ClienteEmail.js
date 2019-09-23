'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClienteEmail extends Model {
  cliente () {
    return this.belongsTo('App/Models/Cliente')
  }

  email () {
    return this.belongsTo('App/Models/Email')
  }
}

module.exports = ClienteEmail

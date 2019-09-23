'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClienteTelefone extends Model {
  cliente () {
    return this.belongsTo('App/Models/Cliente')
  }

  telefone () {
    return this.belongsTo('App/Models/Telefone')
  }
}

module.exports = ClienteTelefone

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contrato extends Model {
  cliente () {
    return this.belongsToMany('App/Models/Cliente')
  }

  Veiculo () {
    return this.belongsToMany('App/Models/Veiculo')
  }

  plano () {
    return this.hasMany('App/Models/Plano')
  }
}

module.exports = Contrato

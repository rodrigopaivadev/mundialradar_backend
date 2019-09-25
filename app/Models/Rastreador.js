'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rastreador extends Model {
  static get table () {
    return 'rastreadores'
  }

  chip () {
    return this.belongsTo('App/Models/Chip')
  }

  veiculo () {
    return this.hasOne('App/Models/Veiculo')
  }
}

module.exports = Rastreador

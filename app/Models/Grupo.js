'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Grupo extends Model {
  veiculos () {
    return this.hasMany('App/Models/Veiculo')
  }
}

module.exports = Grupo

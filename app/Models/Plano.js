'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Plano extends Model {
  contratos () {
    return this.hasMany('App/Models/Contrato')
  }
}

module.exports = Plano

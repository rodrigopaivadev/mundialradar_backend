'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Chip extends Model {
  rastreador () {
    return this.hasOne('App/Models/Rastreador')
  }
}

module.exports = Chip

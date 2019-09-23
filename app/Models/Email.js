'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Email extends Model {
  cliente () {
    return this.belongsToMany('App/Models/Cliente').pivotMany(
      'App/Models/ClienteEmail'
    )
  }
}

module.exports = Email

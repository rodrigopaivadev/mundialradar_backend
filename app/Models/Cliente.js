'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
  telefones () {
    return this.belongsToMany('App/Models/Telefone').pivotModel(
      'App/Models/ClienteTelefone'
    )
  }

  emails () {
    return this.belongsToMany('App/Models/Email').pivotModel(
      'App/Models/ClienteEmail'
    )
  }

  contatos () {
    return this.hasMany('App/Models/Contato')
  }

  veiculos () {
    return this.belongsToMany('App/Models/Veiculo').pivotModel(
      'App/Models/Contrato'
    )
  }
}

module.exports = Cliente

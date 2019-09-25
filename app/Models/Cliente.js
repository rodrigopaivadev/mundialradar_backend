'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
  telefones() {
    return this.hasMany('App/Models/Telefone')
  }

  emails() {
    return this.hasMany('App/Models/Email')
  }

  contatos() {
    return this.hasMany('App/Models/Contato')
  }

  veiculos() {
    return this.belongsToMany('App/Models/Veiculo').pivotModel(
      'App/Models/Contrato'
    )
  }
}

module.exports = Cliente

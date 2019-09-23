'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Database = use('Database')
const Cliente = use('App/Models/Cliente')

/**
 * Resourceful controller for interacting with clientes
 */
class ClienteController {
  /**
   * Show a list of all clientes.
   * GET clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const cliente = await Cliente.query()
      .with('telefones')
      .with('emails')
      .fetch()

    return cliente
  }

  /**
   * Create/save a new cliente.
   * POST clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only([
      'nome',
      'apelido',
      'pessoa',
      'documento',
      'rg',
      'orgao_expedidor',
      'nascimento',
      'logradouro',
      'numero',
      'complemento',
      'bairro',
      'cidade',
      'estado',
      'cep',
      'status'
    ])

    const telefones = request.input('telefones')
    const emails = request.input('emails')
    const contatos = request.input('contatos')

    const trx = await Database.beginTransaction()

    const cliente = await Cliente.create(data, trx)

    await cliente.telefones().createMany(telefones, trx)
    await cliente.emails().createMany(emails, trx)
    await cliente.contatos().createMany(contatos, trx)

    await trx.commit()

    return cliente
  }

  /**
   * Display a single cliente.
   * GET clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request }) {
    const cliente = await Cliente.query()
      .where('id', params.id)
      .with('telefones')
      .with('emails')
      .with('contatos')
      .first()

    return cliente
  }

  /**
   * Update cliente details.
   * PUT or PATCH clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const cliente = await Cliente.query()
      .where('id', params.id)
      .with('telefones')
      .with('emails')
      .with('contatos')
      .first()

    const data = request.only([
      'nome',
      'apelido',
      'pessoa',
      'documento',
      'rg',
      'orgao_expedidor',
      'nascimento',
      'logradouro',
      'numero',
      'complemento',
      'bairro',
      'cidade',
      'estado',
      'cep',
      'status'
    ])

    cliente.merge(data)

    await cliente.save()

    return cliente
  }

  /**
   * Delete a cliente with id.
   * DELETE clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const cliente = await Cliente.query()
      .where('id', params.id)
      .first()

    await cliente.delete()
  }
}

module.exports = ClienteController

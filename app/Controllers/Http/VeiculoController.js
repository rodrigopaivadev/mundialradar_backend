'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Database = use('Database')

const Veiculo = use('App/Models/Veiculo')
const Grupo = use('App/Models/Grupo')
const Rastreador = use('App/Models/Rastreador')
/**
 * Resourceful controller for interacting with veiculos
 */
class VeiculoController {
  /**
   * Show a list of all veiculos.
   * GET veiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const veiculo = await Veiculo.query()
      .with('cliente')
      .with('rastreador')
      .with('grupo')
      .fetch()

    return veiculo
  }

  /**
   * Create/save a new veiculo.
   * POST veiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'fabricante',
      'modelo',
      'placa',
      'cor',
      'chassi',
      'renavam',
      'combustivel',
      'identificacao',
      'possui_bloqueio',
      'descricao_bloqueio',
      'local_equipamento',
      'observacao'
    ])

    const clienteId = request.input('cliente')

    const plano = request.input('plano')

    const grupo = await Grupo.find(request.input('grupo'))

    const rastreador = await Rastreador.find(request.input('rastreador'))

    const trx = await Database.beginTransaction()

    const veiculo = await Veiculo.create(data)

    await veiculo.cliente().attach(clienteId, trx)

    if (plano) {
      await veiculo
        .cliente()
        .pivotQuery()
        .where('cliente_id', clienteId)
        .update({ plano_id: plano }, trx)
    }

    if (rastreador) {
      rastreador.oficina = true
      await rastreador.save(trx)
    }

    await veiculo.grupo().associate(grupo, trx)
    await veiculo.rastreador().associate(rastreador, trx)

    await trx.commit()

    return veiculo
  }

  /**
   * Display a single veiculo.
   * GET veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request }) {
    const veiculo = await Veiculo.findOrFail(params.id)

    await veiculo.load('cliente')
    await veiculo.load('grupo')
    await veiculo.load('rastreador')

    return veiculo
  }

  /**
   * Update veiculo details.
   * PUT or PATCH veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const veiculo = await Veiculo.findOrFail(params.id)

    const data = request.only([
      'fabricante',
      'modelo',
      'placa',
      'cor',
      'chassi',
      'renavam',
      'combustivel',
      'identificacao',
      'possui_bloqueio',
      'descricao_bloqueio',
      'local_equipamento',
      'observacao'
    ])

    veiculo.merge(data)

    await veiculo.save()

    return veiculo
  }

  /**
   * Delete a veiculo with id.
   * DELETE veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const veiculo = await Veiculo.findOrFail(params.id)

    await veiculo.delete()
  }
}

module.exports = VeiculoController

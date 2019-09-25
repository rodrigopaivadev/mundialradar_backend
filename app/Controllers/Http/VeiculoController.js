'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Veiculo = use('App/Models/Veiculo')
const Grupo = use('App/Models/Grupo')
const Rastreador = use('App/Models/Rastreador')
const Plano = use('App/Models/Plano')
const Contrato = use('App/Models/Contrato')
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

    // const plano = await Plano.find(request.input('plano'))

    const grupo = await Grupo.find(request.input('grupo'))

    const rastreador = await Rastreador.find(request.input('rastreador'))

    const veiculo = await Veiculo.create(data)

    await veiculo.cliente().sync(clienteId)

    // if (plano) {
    //   const contrato = Contrato.query()
    //     .where({ veiculo_id: veiculo.id, cliente_id: clienteId })
    //     .first()
    //   console.log(contrato.id)
    // }

    await veiculo.grupo().associate(grupo)
    await veiculo.rastreador().associate(rastreador)

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
  async show ({ params, request, response, view }) {}

  /**
   * Update veiculo details.
   * PUT or PATCH veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {}

  /**
   * Delete a veiculo with id.
   * DELETE veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = VeiculoController

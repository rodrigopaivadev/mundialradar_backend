'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Fornecedor = use('App/Models/Fornecedor')

/**
 * Resourceful controller for interacting with fornecedores
 */
class FornecedorController {
  /**
   * Show a list of all fornecedores.
   * GET fornecedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const fornecedor = await Fornecedor.query().fetch()

    return fornecedor
  }

  /**
   * Create/save a new fornecedor.
   * POST fornecedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only([
      'nome',
      'email',
      'telefone',
      'documento',
      'tipo_documento',
      'endereco',
      'numero',
      'bairro',
      'complemento',
      'cidade',
      'cep'
    ])

    const fornecedor = await Fornecedor.create(data)

    return fornecedor
  }

  /**
   * Display a single fornecedor.
   * GET fornecedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const fornecedor = await Fornecedor.query()
      .where('id', params.id)
      .first()

    return fornecedor
  }

  /**
   * Update fornecedor details.
   * PUT or PATCH fornecedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const fornecedor = await Fornecedor.query()
      .where('id', params.id)
      .first()

    const data = request.only([
      'nome',
      'email',
      'telefone',
      'documento',
      'tipo_documento',
      'endereco',
      'numero',
      'bairro',
      'complemento',
      'cidade',
      'cep'
    ])

    fornecedor.merge(data)

    await fornecedor.save()

    return fornecedor
  }

  /**
   * Delete a fornecedor with id.
   * DELETE fornecedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const fornecedor = await Fornecedor.query()
      .where('id', params.id)
      .first()

    await fornecedor.delete()
  }
}

module.exports = FornecedorController

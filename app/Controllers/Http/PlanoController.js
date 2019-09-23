'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Plano = use('App/Models/Plano')

/**
 * Resourceful controller for interacting with planos
 */
class PlanoController {
  /**
   * Show a list of all planos.
   * GET planos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const plano = await Plano.query().fetch()

    return plano
  }

  /**
   * Create/save a new plano.
   * POST planos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['descricao', 'valor', 'tipo', 'status'])

    const plano = await Plano.create(data)

    return plano
  }

  /**
   * Display a single plano.
   * GET planos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const plano = await Plano.query()
      .where('id', params.id)
      .first()

    return plano
  }

  /**
   * Update plano details.
   * PUT or PATCH planos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const data = request.only(['descricao', 'valor', 'tipo', 'status'])

    const plano = await Plano.query()
      .where('id', params.id)
      .first()

    plano.merge(data)

    await plano.save()

    return plano
  }

  /**
   * Delete a plano with id.
   * DELETE planos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const plano = await Plano.query()
      .where('id', params.id)
      .first()

    await plano.delete()
  }
}

module.exports = PlanoController

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Grupo = use('App/Models/Grupo')
/**
 * Resourceful controller for interacting with grupos
 */
class GrupoController {
  /**
   * Show a list of all grupos.
   * GET grupos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const grupo = await Grupo.query().fetch()

    return grupo
  }

  /**
   * Create/save a new grupo.
   * POST grupos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['nome'])

    const grupo = await Grupo.create(data)

    return grupo
  }

  /**
   * Display a single grupo.
   * GET grupos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request }) {
    const grupo = await Grupo.query()
      .where('id', params.id)
      .first()

    return grupo
  }

  /**
   * Update grupo details.
   * PUT or PATCH grupos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(['nome'])

    const grupo = await Grupo.query()
      .where('id', params.id)
      .first()

    grupo.merge(data)

    await grupo.save()

    return grupo
  }

  /**
   * Delete a grupo with id.
   * DELETE grupos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const grupo = await Grupo.query()
      .where('id', params.id)
      .first()

    await grupo.delete()
  }
}

module.exports = GrupoController

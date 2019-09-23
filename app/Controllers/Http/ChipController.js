'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Chip = use('App/Models/Chip')

/**
 * Resourceful controller for interacting with chips
 */
class ChipController {
  /**
   * Show a list of all chips.
   * GET chips
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const chip = await Chip.query().fetch()

    return chip
  }

  /**
   * Create/save a new chip.
   * POST chips
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['operadora', 'linha', 'numero'])

    const chip = await Chip.create(data)

    return chip
  }

  /**
   * Display a single chip.
   * GET chips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request }) {
    const chip = await Chip.query()
      .where('id', params.id)
      .first()

    return chip
  }

  /**
   * Update chip details.
   * PUT or PATCH chips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const data = request.only(['operadora', 'linha', 'numero'])

    const chip = await Chip.query()
      .where('id', params.id)
      .first()

    chip.merge(data)

    await chip.save()

    return chip
  }

  /**
   * Delete a chip with id.
   * DELETE chips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const chip = await Chip.query()
      .where('id', params.id)
      .first()

    await chip.delete()
  }
}

module.exports = ChipController

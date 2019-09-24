'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Database = use('Database')
const Rastreador = use('App/Models/Rastreador')
const Chip = use('App/Models/Chip')

/**
 * Resourceful controller for interacting with rastreadors
 */
class RastreadorController {
  /**
   * Show a list of all rastreadors.
   * GET rastreadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const rastreador = await Rastreador.query()
      .with('chip')
      .fetch()

    return rastreador
  }

  /**
   * Create/save a new rastreador.
   * POST rastreadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['imei', 'modelo', 'fabricante'])
    const chipId = request.input('chip_id')

    const trx = await Database.beginTransaction()

    const rastreador = await Rastreador.create(
      {
        ...data,
        status: 'ativo',
        oficina: false
      },
      trx
    )

    if (chipId) {
      const chip = await Chip.find(chipId)
      await rastreador.chip().associate(chip, trx)
    }

    await trx.commit()

    return rastreador
  }

  /**
   * Display a single rastreador.
   * GET rastreadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const rastreador = await Rastreador.findOrFail(params.id)

    await rastreador.load('chip')

    return rastreador
  }

  /**
   * Update rastreador details.
   * PUT or PATCH rastreadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const rastreador = await Rastreador.findOrFail(params.id)

    const data = request.only([
      'imei',
      'modelo',
      'fabricante',
      'status',
      'oficina'
    ])
    const chipId = request.input('chip_id')

    const trx = await Database.beginTransaction()

    if (rastreador.chip_id !== chipId) {
      await rastreador.chip().dissociate()
      if (chipId) {
        const chip = await Chip.find(chipId)
        await rastreador.chip().associate(chip, trx)
      }
    }

    rastreador.merge(data)
    await rastreador.save(trx)

    await trx.commit()

    return rastreador
  }

  /**
   * Delete a rastreador with id.
   * DELETE rastreadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const rastreador = await Rastreador.findOrFail(params.id)

    await rastreador.delete()
  }
}

module.exports = RastreadorController

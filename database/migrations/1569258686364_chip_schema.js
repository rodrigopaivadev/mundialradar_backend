'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ChipSchema extends Schema {
  up() {
    this.create('chips', table => {
      table.increments();
      table.string('operadora').notNullable();
      table.string('linha').notNullable();
      table.string('numero').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('chips');
  }
}

module.exports = ChipSchema;

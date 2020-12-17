'use strict';

const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const events = JSON.parse(fs.readFileSync('./events.json', 'utf8'))

    events.forEach(event => {
      event.createdAt = new Date()
      event.updatedAt = new Date()
    })
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Events', events, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Events', null, {})
  }
};

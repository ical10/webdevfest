'use strict';

const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = JSON.parse(fs.readmileSync('./users.json', 'utf8'))

    users.forEach(user => {
      user.createdAt = new Date()
      user.updatedAt = new Date()
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
    return queryInterface.bulkInsert('Users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};

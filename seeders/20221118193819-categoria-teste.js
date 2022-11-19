'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Categoria', [{
       categoria: 'Luta',
       console: 'PS5',
       data_cadastro: new Date('2022-11-18'),
       createdAt: new Date('2022-11-18'),
       updatedAt: new Date('2022-11-18'),
     }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

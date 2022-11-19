"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("listagames", [
      {
        nome: "007 - Golden Gun",
        categoria: "tiro",
        console: "super nintento 64",
        preco: "50",
        data_lancamento: new Date("1992-2-10"),
        comentarios: "base do CS",
        updateAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listagames", null, {});
  },
};

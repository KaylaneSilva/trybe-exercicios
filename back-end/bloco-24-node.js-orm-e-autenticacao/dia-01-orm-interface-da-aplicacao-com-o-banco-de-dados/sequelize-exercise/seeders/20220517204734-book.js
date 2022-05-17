'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books',
    [{
      title: 'Christine',
      author: 'Stephen King',
      page_quantity: 616,
      created_at: new Date("2022-01-28T13:23:32.514Z"),
      updated_at: new Date("2022-01-28T13:23:32.514Z"),
    },
    {
      title: 'Apanhador de Sonhos',
      author: 'Stephen King',
      page_quantity: 656,
      created_at: new Date("2022-01-28T04:51:32.514Z"),
      updated_at: new Date("2022-01-28T04:51:32.514Z"),
    },
    {
      title: 'A Dança da Morte',
      author: 'Stephen King',
      page_quantity: '1248',
      created_at: new Date("2022-01-28T19:37:32.514Z"),
      updated_at: new Date("2022-01-28T19:37:32.514Z"),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};

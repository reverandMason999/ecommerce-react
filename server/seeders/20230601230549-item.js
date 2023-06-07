'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Items', [{
    name: 'timing exercises',
    price: '50.00',
    category: 'electronics',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {})
  }
};

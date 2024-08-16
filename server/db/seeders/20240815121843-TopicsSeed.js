'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Topics', [{
        topicsName: 'Подпой, если сможешь'
      },
      {
        topicsName: 'Твой бывший'
      },
      {
        topicsName: 'Приобщение к искусству'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Topics', null, {});
     
  }
};

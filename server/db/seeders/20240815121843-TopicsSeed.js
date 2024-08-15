'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Topics', [{
        topicsName: 'JavaScript'
      },
      {
        topicsName: 'JavaScript'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Topics', null, {});
     
  }
};

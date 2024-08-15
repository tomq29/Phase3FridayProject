'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Questions', [{
        question: 'What is JavaScript?',
        correctAnswer: 'Programming language',
        point: 5,
        topicId: 1
      },
      {
        question: 'What is DOM?',
        correctAnswer: 'Document Object Model',
        point: 3,
        topicId: 1
      },
      {
        question: 'What is HTML?',
        correctAnswer: 'Hyper Text Markup Language',
        point: 4,
        topicId: 1
      },
      {
        question: 'What is JavaScript?',
        correctAnswer: 'Programming language',
        point: 5,
        topicId: 2
      },
      {
        question: 'What is DOM?',
        correctAnswer: 'Document Object Model',
        point: 3,
        topicId: 2
      },
      {
        question: 'What is HTML?',
        correctAnswer: 'Hyper Text Markup Language',
        point: 4,
        topicId: 2
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Questions', null, {});
  }
};

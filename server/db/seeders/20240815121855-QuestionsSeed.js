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
        question: 'What is Typescript?',
        correctAnswer: 'Programming language TS',
        point: 5,
        topicId: 2
      },
      {
        question: 'What is ssss?',
        correctAnswer: 'qwerrr',
        point: 3,
        topicId: 2
      },
      {
        question: 'What is SQL?',
        correctAnswer: 'Structured Query Language',
        point: 4,
        topicId: 2
      },
      { 
        question: 'What is React?',
        correctAnswer: 'Library',
        point: 5,
        topicId: 3
      },
      {
        question: 'What is Redux?',
        correctAnswer: 'State management library',
        point: 3,
        topicId: 3
      },
      {
        question: 'What is Vue?',
        correctAnswer: 'Framework',
        point: 4,
        topicId: 3
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Questions', null, {});
  }
};

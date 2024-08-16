'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING
      },
      img: {
        defaultValue: "https://placehold.co/600x400.png",
        type: Sequelize.STRING
      },
      correctAnswer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      point: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      topicId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Topics',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};
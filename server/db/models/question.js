'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {

    static associate(models) {
      this.belongsTo(models.Topic, 
        { foreignKey: 'topicId' }
      )
    }
  }
  Question.init({
    question: DataTypes.STRING,
    correctAnswer: DataTypes.STRING,
    img: DataTypes.STRING,
    point: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
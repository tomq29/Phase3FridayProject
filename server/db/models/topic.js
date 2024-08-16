'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      this.hasMany(models.Question, 
        { foreignKey: 'topicId' }
      )
    }
  }
  Topic.init({
    topicsName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
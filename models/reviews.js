'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    userName: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT,
    pid: DataTypes.STRING,
    ownerId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};
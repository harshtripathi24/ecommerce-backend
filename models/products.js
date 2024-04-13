"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      fakePrice: DataTypes.INTEGER,
      author: DataTypes.STRING,
      img: DataTypes.STRING,
      options: DataTypes.STRING,
      shortDesc: DataTypes.STRING,
      longDesc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};

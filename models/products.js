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
      //Product Images Association
      Products.hasMany(models.Images, {
        foreignKey: "pid",
      });

      Products.hasMany(models.Reviews, {
        foreignKey: "pid",
      });

      Products.hasMany(models.Tags, {
        foreignKey: "pid",
      });

      Products.hasMany(models.CartList, {
        foreignKey: "pid",
      });

      Products.hasMany(models.WishList, {
        foreignKey: "pid",
      });

      Products.hasMany(models.Orders, {
        foreignKey: "pid",
      });
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

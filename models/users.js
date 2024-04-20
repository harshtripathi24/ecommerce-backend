"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Users.hasMany(models.CartList, {
        foreignKey: "uid",
      });

      Users.hasMany(models.WishList, {
        foreignKey: "uid",
      });

      Users.hasMany(models.Orders, {
        foreignKey: "uid",
      });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      phoneNumber: DataTypes.BIGINT,
      address: DataTypes.TEXT,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      pincode: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};

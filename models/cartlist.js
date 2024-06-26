"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      CartList.belongsTo(models.Users, { foreignKey: "uid" });
      CartList.belongsTo(models.Products, { foreignKey: "pid" });
    }
  }
  CartList.init(
    {
      pid: DataTypes.STRING,
      uid: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      optionChosen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CartList",
    }
  );
  return CartList;
};

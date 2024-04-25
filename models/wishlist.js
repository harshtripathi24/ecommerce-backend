"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WishList.belongsTo(models.Users, { foreignKey: "uid" });
      WishList.belongsTo(models.Products, { foreignKey: "pid" });
    }
  }
  WishList.init(
    {
      uid: DataTypes.STRING,
      pid: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      optionChosen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "WishList",
    }
  );
  return WishList;
};

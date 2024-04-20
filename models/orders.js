"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Orders.belongsTo(models.Users, { foreignKey: "uid" });
      Orders.belongsTo(models.Products, { foreignKey: "pid" });
    }
  }
  Orders.init(
    {
      orderId: DataTypes.STRING,
      uid: DataTypes.INTEGER,
      pid: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      optionChosen: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      address: DataTypes.TEXT,
      pincode: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};

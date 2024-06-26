"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Tags.belongsTo(models.Products, {
        foreignKey: "pid",
      });
    }
  }
  Tags.init(
    {
      tagName: DataTypes.STRING,
      pid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tags",
    }
  );
  return Tags;
};

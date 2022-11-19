const Categoria = require("../models/categoria");

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    static associate(models) {}
  }
  Games.init(
    {
      nome: DataTypes.STRING,
      categoria: DataTypes.STRING,
      console: DataTypes.STRING,
      preco: DataTypes.FLOAT,
      data_lancamento: {
        type: DataTypes.DATEONLY,
        get() {
          const rawValue = this.getDataValue("data_lancamento");
          return rawValue ? rawValue.split("-").reverse().join("/") : null;
        },
        set(value) {
          const rawValue = value ? value.split("/").reverse().join("-") : null;
          this.setDataValue("data_lancamento", rawValue);
        },
      },
      comentarios: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Games",
      tableName: "listagames",
      timestamps: false,
    }
  );
 
  return Games;
};


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {

    static associate(models) {
    }
  }
  Categoria.init({
    categoria: DataTypes.STRING,
    console: DataTypes.STRING,
    data_cadastro: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};


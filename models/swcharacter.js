'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SWCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SWCharacter.init({
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    mass: DataTypes.STRING,
    hair_color: DataTypes.STRING,
    skin_color: DataTypes.STRING,
    eye_color: DataTypes.STRING,
    birth_year: DataTypes.STRING,
    gender: DataTypes.STRING,
    homeworld: DataTypes.STRING,
    films: DataTypes.ARRAY,
    species: DataTypes.ARRAY,
    vehicles: DataTypes.ARRAY,
    starships: DataTypes.ARRAY,
    url: DataTypes.STRING,
    created: DataTypes.DATE,
    edited: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SWCharacter',
  });
  return SWCharacter;
};
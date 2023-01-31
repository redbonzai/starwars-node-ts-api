'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SWFilm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SWFilm.init({
    title: DataTypes.STRING,
    epizode_id: DataTypes.INTEGER,
    opening_crawl: DataTypes.STRING,
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    release_date: DataTypes.STRING,
    characters: DataTypes.ARRAY,
    planets: DataTypes.ARRAY,
    starships: DataTypes.ARRAY,
    vehicles: DataTypes.ARRAY,
    species: DataTypes.ARRAY,
    url: DataTypes.STRING,
    created: DataTypes.DATE,
    edited: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SWFilm',
  });
  return SWFilm;
};
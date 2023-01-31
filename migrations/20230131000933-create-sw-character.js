'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SWCharacters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      mass: {
        type: Sequelize.STRING
      },
      hair_color: {
        type: Sequelize.STRING
      },
      skin_color: {
        type: Sequelize.STRING
      },
      eye_color: {
        type: Sequelize.STRING
      },
      birth_year: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      homeworld: {
        type: Sequelize.STRING
      },
      films: {
        type: Sequelize.ARRAY
      },
      species: {
        type: Sequelize.ARRAY
      },
      vehicles: {
        type: Sequelize.ARRAY
      },
      starships: {
        type: Sequelize.ARRAY
      },
      url: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE
      },
      edited: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SWCharacters');
  }
};
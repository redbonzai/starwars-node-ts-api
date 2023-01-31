'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SWFilms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      epizode_id: {
        type: Sequelize.INTEGER
      },
      opening_crawl: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      producer: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      characters: {
        type: Sequelize.ARRAY
      },
      planets: {
        type: Sequelize.ARRAY
      },
      starships: {
        type: Sequelize.ARRAY
      },
      vehicles: {
        type: Sequelize.ARRAY
      },
      species: {
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
    await queryInterface.dropTable('SWFilms');
  }
};
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("menus", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      starter_course: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      protein: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accompany: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      garnish: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dessert: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("menus");
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ratings", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      starter_course: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      protein: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      accompany: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      garnish: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dessert: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      menu_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "menus", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("ratings");
  },
};

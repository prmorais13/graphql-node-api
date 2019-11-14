"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        llowNull: false
      },
      email: {
        type: Sequelize.STRING,
        llowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        llowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        llowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};

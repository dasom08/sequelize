'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sites',{
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING
        // allowNull defaults to true
      }
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sites');
  }
};

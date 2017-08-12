'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Leaves', 'location', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
};

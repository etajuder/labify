'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Leaves', 'time', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
};

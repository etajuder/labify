'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Bookings', 'time', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
};

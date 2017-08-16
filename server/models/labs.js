'use strict';
module.exports = function(sequelize, DataTypes) {
  var Labs = sequelize.define('Labs', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
  }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Labs.hasMany(models.Bookings);
      }
    }
  });
  return Labs;
};
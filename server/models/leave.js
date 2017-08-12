'use strict';
module.exports = function(sequelize, DataTypes) {
  var Leave = sequelize.define('Leave', {
    fullName: DataTypes.STRING,
    empId: DataTypes.STRING,
    dateGoing: DataTypes.STRING,
    dateComing: DataTypes.STRING,
    reason: DataTypes.TEXT,
    status: DataTypes.STRING,
    location: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Leave;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var LabPurpose = sequelize.define('LabPurpose', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return LabPurpose;
};
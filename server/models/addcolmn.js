'use strict';
module.exports = function(sequelize, DataTypes) {
  var addcolmn = sequelize.define('addcolmn', {
    time: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return addcolmn;
};
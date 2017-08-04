'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bookings = sequelize.define('Bookings', {
    purposeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    labId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Bookings.belongsTo(models.Students, {
          onDelete: 'cascade',
          foreignKey: 'studentId'
        });

        Bookings.belongsTo(models.Labs, {
          onDelete: 'cascade',
          foreignKey: 'labId'
        });

        Bookings.belongsTo(models.LabPurpose, {
          onDelete: 'cascade',
          foreignKey: 'purposeId'
        });
      }
    }
  });
  return Bookings;
};
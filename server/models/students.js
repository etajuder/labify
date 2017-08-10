import bcrypt from 'bcrypt-nodejs';

module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { is: /\w+$/i }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: { is: /\w+$/i },
    },

    regNo: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Students.hasMany(models.Bookings);
      }
    },

    instanceMethods: {

      validPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },

      hashPassword() {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
      }
    },

    hooks: {
      beforeCreate(student) {
        student.hashPassword();
      },

      beforeUpdate(student) {
        if (student._changed.password) {
          student.hashPassword();
        }
      }
    }
  });
  return Students;
};
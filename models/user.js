'use strict';
const {
  Model
} = require('sequelize');

// require for hashing
const encryptPassword = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserEvent)
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING,
    language: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    // hashing password
    hooks: {
      beforeCreate(userInstance, options) {
        userInstance.password = encryptPassword(userInstance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};

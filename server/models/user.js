'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Item, {
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    hooks: {
      async beforeCreate(user) {
        user.password = await bcrypt.hash(user.password, 11);
      }
    }
  }, 
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};
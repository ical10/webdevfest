'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }


    // Instance Methods Convert Date
    convertDate(input) {
      const output = `${input.toDateString()}`;
      return output
    }
  };
  Event.init({
    name: DataTypes.STRING,
    HTM: DataTypes.INTEGER,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
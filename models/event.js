'use strict';
const {format} = require('date-fns')

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
      Event.hasMany(models.UserEvent)
    }

    // Instance Methods Convert Date
    convertDate(input) {
      const formattedDate = format(Date.parse(input), 'dd.MM.yyyy')
      //const output = `${input.toDateString()}`;
      return formattedDate
    }
  };
  Event.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};

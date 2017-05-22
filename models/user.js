'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: {
      type:DataTypes.STRING,
      validate: {
        isUnique: function(data, micin) {
          User.find({
            where : {
              username : data
            }
          })
          .then(function(exist) {
            if (exist) {
              return micin('Username already in exist')
              return micin()
            }
          })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
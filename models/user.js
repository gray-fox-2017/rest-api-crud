'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next){
          var self = this;
          User.find({where: {email: value}})
          .then(function(user) {
            if (user && self.id !== user.id) {
              return next('Email already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          })
        },
        is:{
          args: /\w{5,30}\@\w{2,10}.\w{2,10}/i,
          msg: 'Email must contain @ and .'
        }
      },
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next){
          var self = this;
          User.find({where: {username: value}})
          .then(function(user) {
            if (user && self.id !== user.id) {
              return next('username already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          })
        }
      },
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

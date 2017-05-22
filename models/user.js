'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'Username should not be null'
      },
      validate: {
        isUnique: function(value, next) {
          user.find({where: {username: value}})
            .then((user) => {
              if(user && this.id !== user.id) {
                return next('Username already exists');
              }
              return next();
            })
            .catch((err) => {
              return next(err);
            });
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'Username should not be null'
      },
      validate: {
        isUnique: function(value, next) {
          user.find({where: {username: value}})
            .then((user) => {
              if(user && this.id !== user.id) {
                return next('Username already exists');
              }
              return next();
            })
            .catch((err) => {
              return next(err);
            });
        },
        isEmail: {
          args: true,
          msg: `Email format is incorrect`
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'Username should not be null'
      },
    },
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};

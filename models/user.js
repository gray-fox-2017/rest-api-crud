'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type : DataTypes.STRING,
      allowNull : {args:false, msg:'Name must not be null'},
      validate: {
        isAlpha: {
          args:true,
          msg: 'Username must be alphabet'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      // validate: {
        allowNull : {args:false, msg:'Password must not be null'}
      // }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : {args:false, msg:'Email must not be null'},
      validate: {

        isEmail : {
          msg: "Invalid Email"
        },
        isUnique: function (value,next){
          if(value){
            User
            .find({ where: {email:value }})
            .then(function (user) {
              if (user) next ("Email in use");
              else next();
            }).error(function (err) {
              next(err.message);
            });
          }
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      allowNull : {args:false, msg:'Role must not be null'}

    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
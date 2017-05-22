'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      validate:{
        isUnique:(value,next)=>{
          User.findOne({where:{username:value}})
          .then(username=>{
            if(username){
              next('username must be unique')
            } else {
              next()
            }
          })
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          message:'input is not an email'
        },
        isUnique:(value,next)=>{
          User.findOne({where:{email:value}})
          .then(email=>{
            if(email){
              next('email must be unique')
            } else {
              next()
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
  return user;
};
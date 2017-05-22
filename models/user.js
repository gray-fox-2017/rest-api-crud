'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      validate:{
        isUnique: function(data, err) {
                  User.find({
                    where: {
                      username: data
                    }
                  }).then(function(error) {
                    if (error)
                      return err('Username already in use!');
                    return err();
                  });
                }
      }  
  
  },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //   }
    // }
  });
  return User;
};
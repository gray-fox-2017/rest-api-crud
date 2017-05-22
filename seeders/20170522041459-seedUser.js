'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {username:'poppy',password:'pass',email:'psari@gmail.com',role:'admin',createdAt:new Date(),updatedAt:new Date()},
      {username:'admin',password:'pass',email:'admin@gmail.com',role:'admin',createdAt:new Date(),updatedAt:new Date()},
      {username:'spv',password:'pass',email:'spv@gmail.com',role:'spv',createdAt:new Date(),updatedAt:new Date()},
      {username:'user',password:'pass',email:'user@gmail.com',role:'user',createdAt:new Date(),updatedAt:new Date()}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users',null,{});
  }
};

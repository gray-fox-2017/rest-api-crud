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
    return queryInterface.bulkInsert('users',[{
      username: 'ingelieur',
      email: 'ingelieur@gmail.com',
      password: '123456',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'abrakadabra',
      email: 'abrakadabra@gmail.com',
      password: '123456',
      role: 'supervisor',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'esviai',
      email: 'esviai@gmail.com',
      password: '123456',
      role: 'customer',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
    return queryInterface.bulkDelete('users',null,{});
  }
};

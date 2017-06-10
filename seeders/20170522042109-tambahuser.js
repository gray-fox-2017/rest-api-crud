'use strict';
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var salt = bcrypt.genSaltSync(saltRounds);

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
    return queryInterface.bulkInsert('Users', [{
      name: 'Sidik',
      username: 'sidiksigap',
      email: 'sidik@gmail.com',
      password: bcrypt.hashSync('sidiksigap', salt),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Admin',
      username: 'admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('admin', salt),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Silhoutte',
      username: 'sisilhuthut',
      email: 'sisil@gmail.com',
      password: bcrypt.hashSync('gelap', salt),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Baram',
      username: 'baramemanhi',
      email: 'baramhae@gmail.com',
      role: 'user',
      password: bcrypt.hashSync('cukajawa', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gurarara',
      username: 'shishishi',
      email: 'kukukuku@gmail.com',
      password: bcrypt.hashSync('gulaaren', salt),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mangkan',
      username: 'mangkanaaa',
      email: 'makannn@gmail.com',
      password: bcrypt.hashSync('garamdapur', salt),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
};

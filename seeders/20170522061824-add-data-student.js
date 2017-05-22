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
    return queryInterface.bulkInsert('Students', [{
      firstname: 'deri',
      lastname: 'kurniawan',
      email: 'deri@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      firstname: 'ambo',
      lastname: 'dalle',
      email: 'ambodalle@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

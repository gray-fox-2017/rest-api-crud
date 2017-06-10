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
    */return queryInterface.bulkInsert('Memos', [{
      title: 'Test 1',
      text: 'Ini isi title1, fufufu',
      userId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Test 2',
      text: 'Ini isi title 2, fafafafa',
      userId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Test 3',
      text: 'Ini isi title 3, fofofofo',
      userId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Test 4',
      text: 'Ini isi title 4, fifififi',
      userId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Test 5',
      text: 'Ini isi title 5, fefefefefe',
      userId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Test 6',
      text: 'Ini isi title 6, fafifafifafifafi',
      userId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Test 7',
      text: 'Ini isi title 7, fufofufofufo',
      userId: 16,
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
    return queryInterface.bulkDelete('Memos', null, {})
  }
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return [
      queryInterface.addColumn('Users','username',{type: Sequelize.STRING}),
      queryInterface.addColumn('Users','password',{type: Sequelize.STRING}),
      queryInterface.addColumn('Users','role',{type: Sequelize.STRING})
    ]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return [
      queryInterface.removeColumn('Contacts', 'user_name'),
      queryInterface.removeColumn('Contacts', 'password'),
      queryInterface.removeColumn('Contacts', 'role')
    ]
  }
};

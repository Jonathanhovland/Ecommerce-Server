"use strict"

module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Clothing"
      }, {
        name: "Electronics"
      }, {
        name: "Miscellaneous"
      }
    ], {})
  },

  //eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {})
  }
}

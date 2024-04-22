"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tags", [
      { tagName: "Self Help", pid: 1 },
      { tagName: "Featured Products", pid: 1 },
      { tagName: "Self Help", pid: 2 },
      { tagName: "Featured Products", pid: 2 },
      { tagName: "Self Help", pid: 3 },
      { tagName: "New Arrivals", pid: 3 },
      { tagName: "Self Help", pid: 4 },
      { tagName: "Featured Products", pid: 4 },
      { tagName: "Psychology", pid: 5 },
      { tagName: "Featured Products", pid: 5 },
      { tagName: "Psychology", pid: 6 },
      { tagName: "Most Viewed", pid: 6 },
      { tagName: "Romance", pid: 7 },
      { tagName: "Most Viewed", pid: 7 },
      { tagName: "Romance", pid: 8 },
      { tagName: "New Arrivals", pid: 8 },
      { tagName: "Fantasy", pid: 9 },
      { tagName: "Featured Products", pid: 9 },
      { tagName: "Thriller", pid: 10 },
      { tagName: "New Arrivals", pid: 10 },
      { tagName: "Fantasy", pid: 11 },
      { tagName: "New Arrivals", pid: 11 },
      { tagName: "Horror", pid: 12 },
      { tagName: "New Arrivals", pid: 12 },
      { tagName: "Fantasy", pid: 13 },
      { tagName: "Most Viewed", pid: 13 },
      { tagName: "Thriller", pid: 14 },
      { tagName: "Most Viewed", pid: 14 },
      { tagName: "Thriller", pid: 15 },
      { tagName: "New Arrivals", pid: 15 },
      { tagName: "Fantasy", pid: 16 },
      { tagName: "New Arrivals", pid: 16 },
      { tagName: "Horror", pid: 17 },
      { tagName: "Featured Products", pid: 17 },
      { tagName: "Thriller", pid: 18 },
      { tagName: "Featured Products", pid: 18 },
      { tagName: "Fantasy", pid: 19 },
      { tagName: "Featured Products", pid: 19 },
      { tagName: "Thriller", pid: 20 },
      { tagName: "Featured Products", pid: 20 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

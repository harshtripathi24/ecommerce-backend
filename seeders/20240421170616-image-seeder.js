"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("images", [
      {
        url: `${process.env.BASE_URL}/images/product_imgs/psychologyOfMoney.webp`,
        pid: 1,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/psychologyOfMoney2.webp`,
        pid: 1,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/psychologyOfMoney3.jpg`,
        pid: 1,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/psychologyOfMoney4.jpg`,
        pid: 1,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/eatThatFrog.jpg`,
        pid: 2,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/eatThatFrog2.jpg`,
        pid: 2,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/eatThatFrog3.jpg`,
        pid: 2,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/eatThatFrog4.jpg`,
        pid: 2,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkAndGrowRich.jpg`,
        pid: 3,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkAndGrowRich2.jpg`,
        pid: 3,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkAndGrowRich3.jpg`,
        pid: 3,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkAndGrowRich4.jpg`,
        pid: 3,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/howtoWInFriends.jpg`,
        pid: 4,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/howtoWInFriends2.jpg`,
        pid: 4,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/howtoWInFriends3.jpg`,
        pid: 4,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/howtoWInFriends4.jpg`,
        pid: 4,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkingFastAndSlow.jpg`,
        pid: 5,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkingFastAndSlow2.jpg`,
        pid: 5,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkingFastAndSlow3.jpg`,
        pid: 5,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/thinkingFastAndSlow4.jpg`,
        pid: 5,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/range.jpg`,
        pid: 6,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/range2.jpg`,
        pid: 6,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/range3.jpg`,
        pid: 6,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/range4.jpg`,
        pid: 6,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/itEndsWithUS.jpg`,
        pid: 7,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/itEndsWithUS2.webp`,
        pid: 7,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/itEndsWithUS3.webp`,
        pid: 7,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/itEndsWithUS4.webp`,
        pid: 7,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/loveUnscripted.webp`,
        pid: 8,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/loveUnscripted2.jpg`,
        pid: 8,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/loveUnscripted3.jpg`,
        pid: 8,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/loveUnscripted4.webp`,
        pid: 8,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/blackForest.jpg`,
        pid: 9,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/blackForest2.jpg`,
        pid: 9,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/blackwing.jpg`,
        pid: 10,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/blackwing2.jpg`,
        pid: 10,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/blackwing3.jpg`,
        pid: 10,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/blackwing4.jpg`,
        pid: 10,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/heritage.jpg`,
        pid: 11,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/heritage2.jpg`,
        pid: 11,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/heritage.jpg`,
        pid: 11,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/houseOfFuries.jpg`,
        pid: 12,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/houseOfFuries2.jpg`,
        pid: 12,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/houseOfFuries3.jpg`,
        pid: 12,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/houseOfFuries4.jpg`,
        pid: 12,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/persuedByADragon.jpg`,
        pid: 13,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/persuedByADragon.jpg`,
        pid: 13,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/secretAndLies.jpg`,
        pid: 14,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/secretAndLies2.jpg`,
        pid: 14,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/secretAndLies.jpg`,
        pid: 14,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/shadowLand.jpg`,
        pid: 15,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theChaosOfStars.jpg`,
        pid: 16,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theChaosOfStars2.webp`,
        pid: 16,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theChaosOfStars3.jpg`,
        pid: 16,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theChaosOfStars4.jpg`,
        pid: 16,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theLastChanceHotel.jpg`,
        pid: 17,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theLastChanceHotel2.jpg`,
        pid: 17,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theLastChanceHotel3.jpg`,
        pid: 17,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theLastChanceHotel4.jpg`,
        pid: 17,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theSleepWalkers.webp`,
        pid: 18,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/theSleepWalkers.webp`,
        pid: 18,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/wovenInMoonLight.jpg`,
        pid: 19,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/wovenInMoonLight2.webp`,
        pid: 19,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/wovenInMoonLight3.webp`,
        pid: 19,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/wovenInMoonLight4.webp`,
        pid: 19,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/danceWithTheDead.jpg`,
        pid: 20,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/danceWithTheDead2.jpg`,
        pid: 20,
      },
      {
        url: `${process.env.BASE_URL}/images/product_imgs/danceWithTheDead3.jpg`,
        pid: 20,
      },
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

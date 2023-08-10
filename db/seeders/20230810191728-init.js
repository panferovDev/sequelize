/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe', gender: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Jane Doe', gender: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'John Smith', gender: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Jane Smith', gender: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Pupa', gender: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Lupa', gender: false, createdAt: new Date(), updatedAt: new Date(),
      },

    ]);

    await queryInterface.bulkInsert('Likes', [
      {
        liker: 1, liked: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        liker: 1, liked: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        liker: 2, liked: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        liker: 1, liked: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        liker: 5, liked: 1, createdAt: new Date(), updatedAt: new Date(),
      },

    ], {});
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

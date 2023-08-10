const { Sequelize } = require('sequelize');
const { User } = require('../db/models');

// поиск пользователей которых не лайкал конкретный пользователь
async function getNotLikedUsers() {
  const users = await User.findAll({
    where: {
      id: {
        [Sequelize.Op.ne]: 1,
      },
    },
    include: [{
      model: User,
      as: 'likedBy',
      through: {
        where: {
          liker: 1,
        },
        attributes: [],
      },
      required: false,
    }],
    group: ['User.id', 'likedBy.id'],
    having: Sequelize.literal('COUNT("likedBy"."id") = 0'),
  });
  console.log(JSON.stringify(users, null, 2));
}
getNotLikedUsers();

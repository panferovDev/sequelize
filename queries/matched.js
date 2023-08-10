const { User } = require('../db/models');

// Взаимные лайки конкретного пользователя
async function getMatches() {
  const users = await User.findOne({
    where: { id: 1 },
    as: 'liker',
    include: [
      {
        as: 'likedBy',
        model: User,
        through: { attributes: [] },
      },
    ],

  });
  console.log(JSON.stringify(users, null, 2));
}
getMatches();

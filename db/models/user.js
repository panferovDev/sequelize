const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.User, { as: 'liked', through: 'Likes', foreignKey: 'liker' });
      this.belongsToMany(models.User, { as: 'likedBy', through: 'Likes', foreignKey: 'liked' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

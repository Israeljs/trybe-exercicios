// models/UserBook.js
module.exports = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('UserBook', {
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    { timestamps: false, underscored: false },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'bookId',
      otherKey: 'userId',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'userId',
      otherKey: 'bookId',
    });
  };

  return UserBook;
};

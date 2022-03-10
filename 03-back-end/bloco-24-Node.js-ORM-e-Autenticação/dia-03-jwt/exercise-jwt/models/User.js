// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'User',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasOne(models.Address,
      { foreignKey: 'user_id', as: 'address' });
  };
  // a tabela user possui um Address
  // relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo . 
  return User;
};

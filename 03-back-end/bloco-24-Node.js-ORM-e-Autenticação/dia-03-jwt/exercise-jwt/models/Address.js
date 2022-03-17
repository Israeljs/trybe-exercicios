module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'Address',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user' });
  };

  return Address;
};

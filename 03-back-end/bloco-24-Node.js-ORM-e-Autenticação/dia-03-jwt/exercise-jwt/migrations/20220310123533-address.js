module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'User',
          key: 'id',
        },
      },
    });
  },
  // references.model : Indica qual tabela nossa FK está referenciando.
  // references.key : Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key .
  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Address');
  },
};

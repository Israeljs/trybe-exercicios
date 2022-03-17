module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Address',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Florida',
          number: 1080,
          user_id: 1,
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          user_id: 2,
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          user_id: 3,
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          user_id: 4,
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          user_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Address', null, {});
  },
};

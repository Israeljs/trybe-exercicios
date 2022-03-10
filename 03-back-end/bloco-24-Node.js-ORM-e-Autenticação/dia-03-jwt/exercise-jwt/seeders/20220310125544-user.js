module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('User',
      [
        { name: 'Marcos', age: 49, userName: 'Zuck', password: 'gf1234'},
        { name: 'Fred', age: 19, userName: 'Mercurio', password: 'gf1234'},
        { name: 'Ayrton', age: 51, userName: 'Keno', password: 'gf1234'},
        { name: 'Robin', age: 63, userName: 'Mathias', password: 'gf1234'},
        { name: 'Antonio', age: 18, userName: 'Augusto', password: 'gf1234'},
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  },
};

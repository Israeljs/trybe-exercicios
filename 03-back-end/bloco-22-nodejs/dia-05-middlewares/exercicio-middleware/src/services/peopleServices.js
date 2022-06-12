const people = require('../baseDados');

module.exports = {
  getAll: () => people,

  getById: (id) => people.find((person) => person.id === id)
}

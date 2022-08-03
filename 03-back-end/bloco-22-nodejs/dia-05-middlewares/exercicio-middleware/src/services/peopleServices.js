const people = require('../baseDados');

module.exports = {
  getAll: () => people,

  getById: (id) => people.find((person) => person.id === id),

  update: (id, email, phone) => {
    const peopleIndex = people.findIndex((person) => person.id === id);

    people[peopleIndex] = {...people[peopleIndex], email: email, phone: phone};

    // people.splice(peopleIndex, 1, people[peopleIndex])

    return people;
  }
}

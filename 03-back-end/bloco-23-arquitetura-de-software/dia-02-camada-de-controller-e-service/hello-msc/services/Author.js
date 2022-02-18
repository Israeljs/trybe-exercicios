
const Author = require('../models/Author')
const createAuthor = async (firstName, middleName, lastName) => {

const [author] = await Author.createAuthor(firstName, middleName, lastName)

authorId = author.insertId;

return getNewAuthor({
  id: authorId,
  firstName,
  middleName,
  lastName,
})
};

module.exports = {
//   getAll,
//   findById,
  createAuthor,
}
// const [author] = Author.createAuthor(firstName, middleName, lastName)

// authorId = author.insertId;

// return getNewAuthor({
//   id: authorId,
//   firstName,
//   middleName,
//   lastName,
// })

const peopleServices = require('../services/peopleServices');

module.exports = {
  getAll: (_req, res, next) => {
    try {
      const people = peopleServices.getAll();

      return res.status(200).json(people);
    } catch (e) {
      next(e);
    }
  },
  getById: (req, res, next) => {
    const { id } = req.params
    try {
      const person = peopleServices.getById(id);

      if (!person) return res.status(404).json({ message: 'Product not found' });

      return res.status(200).json(person);
    } catch (e) {
      next(e);
    }
  }
}
const Joi = require('joi');
const { runSchema } = require('./validators');
const directorModel = require('../models/directorModel');
const NotFoundError = require('../errors/NotFoundError');

const directorService = {
  validateBody(data) {
    const bodySchema = Joi.object({
      name: Joi.string().required(),
    });

    const { error, value } = bodySchema.validate(data);

    if (error) throw error;

    return value;
  },

  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  async checkIfExists(id) {
    const exists = await directorModel.exists(id);
    if (!exists) {
      throw new NotFoundError('Director not found');
    }
  },

  async createDirector(data) {
    const id = await directorModel.createDirector(data);
    return { id, ...data };
  },

  async edit(id, changes) {
    if (Object.keys(changes).length) {
      await directorModel.edit(id, changes);
    }
  },
};

module.exports = directorService;
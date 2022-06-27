const Joi = require('joi');
const movieModel = require('../models/movieModel');
const movieCharacterModel = require('../models/movieCharacterModel');
const { runSchema } = require('./validators');
const NotFoundError = require('../errors/NotFoundError');

const movieService = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  validateBodyAdd: runSchema(Joi.object({
    name: Joi.string().required().max(100),
    characters: Joi.array().required().items(Joi.object({
      id: Joi.number().required().positive().integer(),
    })),
  })),

  validateBodyEdit: runSchema(Joi.object({
    name: Joi.string().max(100),
    characters: Joi.array().items(Joi.object({
      id: Joi.number().required().positive().integer(),
    })),
  })),

  async checkIfExists(id) {
    const exists = await movieModel.exists(id);
    if (!exists) {
      throw new NotFoundError('"movie" not found');
    }
  },

  async remove(id) {
    await movieModel.remove(id);
  },

  async edit(id, changes) {
    const { characters, ...rest } = changes;
    if (Object.keys(rest).length) {
      await movieModel.edit(id, rest);
    }
    if (characters) {
      await movieCharacterModel.bulkRemoveByMovie(id);
      await movieCharacterModel.bulkAddByMovie(id, characters);
    }
  },

  async add(data) {
    const { characters, ...rest } = data;
    const id = await movieModel.add(rest);
    await movieCharacterModel.bulkAddByMovie(id, characters);
    return id;
  },

  async get(id) {
    const [movie, characters] = await Promise.all([
      movieModel.get(id),
      movieCharacterModel.listCharacterByMovie(id),
    ]);
    movie.characters = characters;
    return movie;
  },

  async list() {
    const items = await movieModel.list();
    return items;
  },
};

module.exports = movieService;
const Joi = require('joi');
const { runSchema } = require('./validators');
const characterModel = require('../models/characterModel');
const NotFoundError = require('../errors/NotFoundError');

const characterService = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  validateBodyAdd: runSchema(Joi.object({
    name: Joi.string().required().max(100),
  })),

  validateBodyEdit: runSchema(Joi.object({
    name: Joi.string().max(100),
  })),

  async checkIfExists(id) {
    const exists = await characterModel.exists(id);
    if (!exists) {
      throw new NotFoundError('"character" not found');
    }
  },

  async checkIfExistsByArrayOfId(arrayOfId) {
    const items = await characterModel.listByArrayOfId(arrayOfId);

    if (!items.length) throw new NotFoundError('"characters not found');

    items.forEach((item, index) => {
      if (!arrayOfId.includes(item.id)) {
        throw new NotFoundError(`"character[${index}]" not found`);
      }
    });
  },

  async remove(id) {
    await characterModel.remove(id);
  },

  async edit(id, changes) {
    if (Object.keys(changes).length) {
      await characterModel.edit(id, changes);
    }
  },

  async add(data) {
    const id = await characterModel.add(data);
    return id;
  },

  async get(id) {
    const item = await characterModel.get(id);
    return item;
  },

  async list() {
    const items = await characterModel.list();
    return items;
  },

  async listByArrayOfId(arrayOfId) {
    const items = await characterModel.listByArrayOfId(arrayOfId);
    return items;
  },
};

module.exports = characterService;
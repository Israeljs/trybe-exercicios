const characterService = require('../services/characterService');

const characterController = {
  async removeCharacter(req, res) {
    const { id } = await characterService.validateParamsId(req.params);
    await characterService.checkIfExists(id);
    await characterService.remove(id);
    res.sendStatus(204);
  },

  async editCharacter(req, res) {
    const [{ id }, changes] = await Promise.all([
      characterService.validateParamsId(req.params),
      characterService.validateBodyEdit(req.body),
    ]);
    await characterService.checkIfExists(id);
    await characterService.edit(id, changes);
    const item = await characterService.get(id);
    res.json(item);
  },

  async getCharacter(req, res) {
    const { id } = await characterService.validateParamsId(req.params);
    await characterService.checkIfExists(id);
    const item = await characterService.get(id);
    res.json(item);
  },

  async listCharacters(req, res) {
    const items = await characterService.list();
    res.json(items);
  },

  async addCharacter(req, res) {
    const data = await characterService.validateBodyAdd(req.body);
    const id = await characterService.add(data);
    const item = await characterService.get(id);
    res.status(201).json(item);
  },
};

module.exports = characterController;
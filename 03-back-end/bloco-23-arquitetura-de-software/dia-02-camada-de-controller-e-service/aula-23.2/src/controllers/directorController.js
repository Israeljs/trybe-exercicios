const directorService = require('../services/directorService');

const directorController = {
  async createDirector(req, res) {
    const data = directorService.validateBody(req.body);
    const director = await directorService.createDirector(data);
    res.status(201).json(director);
  },

  async updateDirector(req, res) {
    const { id } = await directorService.validateParamsId(req.params);
    const data = await directorService.validateBody(req.body);

    await directorService.checkIfExists(id);
    
    await directorService.edit(id, data);
    res.sendStatus(204);
  },
};

module.exports = directorController;
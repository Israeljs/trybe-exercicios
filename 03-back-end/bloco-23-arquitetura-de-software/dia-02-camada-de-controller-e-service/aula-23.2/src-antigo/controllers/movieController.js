const characterService = require('../services/characterService');
const movieService = require('../services/movieService');

const movieController = {
  async removeMovie(req, res) {
    const { id } = await movieService.validateParamsId(req.params);
    await movieService.checkIfExists(id);
    await movieService.remove(id);
    res.sendStatus(204);
  },

  async editMovie(req, res) {
    const [{ id }, changes] = await Promise.all([
      movieService.validateParamsId(req.params),
      movieService.validateBodyEdit(req.body),
    ]);
    await movieService.checkIfExists(id);
    await movieService.edit(id, changes);
    const item = await movieService.get(id);
    res.json(item);
  },

  async getMovie(req, res) {
    const { id } = await movieService.validateParamsId(req.params);
    await movieService.checkIfExists(id);
    const item = await movieService.get(id);
    res.json(item);
  },

  async listMovies(req, res) {
    const items = await movieService.list();
    res.json(items);
  },

  async addMovie(req, res) {
    const data = await movieService.validateBodyAdd(req.body);
    const characters = data.characters.map((item) => item.id);
    await characterService.checkIfExistsByArrayOfId(characters);
    const id = await movieService.add(data);
    const item = await movieService.get(id);
    res.status(201).json(item);
  },
};

module.exports = movieController;
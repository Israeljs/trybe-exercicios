const db = require('./db');

const movieCharacterModel = {
  async bulkAddByMovie(movieId, items) {
    const sql = `
      INSERT INTO db.movie_character (movie_id, character_id) 
      VALUES ?
    `;
    const map = items.map((item) => [movieId, item.id]);
    await db.query(sql, [map]);
  },

  async bulkRemoveByMovie(movieId) {
    const sql = `
      DELETE FROM db.movie_character 
      WHERE movie_id = ?
    `;
    await db.query(sql, [movieId]);
  },

  async listCharacterByMovie(movieId) {
    const sql = `
      SELECT c.* 
      FROM db.movie_character mc
      INNER JOIN db.character c ON mc.character_id = c.id
      WHERE mc.movie_id = ?
    `;
    const [items] = await db.query(sql, [movieId]);
    return items;
  },
};

module.exports = movieCharacterModel;
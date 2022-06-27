const db = require('./db');

const movieModel = {
  async remove(id) {
    const sql = `
      DELETE FROM db.movie 
      WHERE id = ?
    `;
    await db.query(sql, [id]);
  },

  async edit(id, changes) {
    const sql = `
      UPDATE db.movie 
      SET ? 
      WHERE id = ?
    `;
    await db.query(sql, [changes, id]);
  },

  async exists(id) {
    const sql = `
      SELECT * 
      FROM db.movie 
      WHERE id = ?
    `;
    const [[exists]] = await db.query(sql, [id]);
    return !!exists;
  },

  async get(id) {
    const sql = `
      SELECT * 
      FROM db.movie 
      WHERE id = ?
    `;
    const [[item]] = await db.query(sql, [id]);
    return item;
  },

  async list() {
    const sql = `
      SELECT * 
      FROM db.movie
    `;
    const [items] = await db.query(sql);
    return items;
  },

  async add(data) {
    const sql = `
      INSERT INTO db.movie (name) 
      VALUES (?)
    `;
    const [{ insertId }] = await db.query(sql, [data.name]);
    return insertId;
  },
};

module.exports = movieModel;
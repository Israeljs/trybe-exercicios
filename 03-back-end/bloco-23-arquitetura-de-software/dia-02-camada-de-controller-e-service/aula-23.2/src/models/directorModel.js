const db = require('./db');

const directorModel = {
  async createDirector({ name }) {
    const sql = 'INSERT INTO directors (name) VALUES (?)';
    const [{ insertId }] = await db.execute(sql, [name]);
    return insertId;
  },

  async exists(id) {
    const sql = `
      SELECT * 
      FROM db.directors
      WHERE id = ?
    `;
    const [[exists]] = await db.query(sql, [id]);
    return !!exists;
  },

  async edit(id, changes) {
    const sql = `
      UPDATE db.directors 
      SET ? 
      WHERE id = ?
    `;
    await db.query(sql, [changes, id]);
  },
};

module.exports = directorModel;
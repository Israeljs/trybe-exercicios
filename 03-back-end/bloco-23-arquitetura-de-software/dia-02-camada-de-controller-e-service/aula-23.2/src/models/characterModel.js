const db = require('./db');

const charactersModel = {
  async remove(id) {
    const sql = `
      DELETE FROM db.character 
      WHERE id = ?
    `;
    await db.query(sql, [id]);
  },

  async edit(id, changes) {
    const sql = `
      UPDATE db.character 
      SET ? 
      WHERE id = ?
    `;
    await db.query(sql, [changes, id]);
  },

  async exists(id) {
    const sql = `
      SELECT 1 
      FROM db.character 
      WHERE id = ?
    `;
    const [[exists]] = await db.query(sql, [id]);
    return !!exists;
  },

  async get(id) {
    const sql = `
      SELECT * 
      FROM db.character 
      WHERE id = ?
    `;
    const [[item]] = await db.query(sql, [id]);
    return item;
  },

  async list() {
    const sql = `
      SELECT * 
      FROM db.character
    `;
    const [items] = await db.query(sql);
    return items;
  },

  async listByArrayOfId(arrayOfId) {
    const sql = `
      SELECT * 
      FROM db.character 
      WHERE id IN (?)
    `;
    const [items] = await db.query(sql, arrayOfId);
    return items;
  },

  async add(data) {
    const sql = `
      INSERT INTO db.character (name) 
      VALUES (?)
    `;
    const [{ insertId }] = await db.query(sql, [data.name]);
    return insertId;
  },
};

module.exports = charactersModel;
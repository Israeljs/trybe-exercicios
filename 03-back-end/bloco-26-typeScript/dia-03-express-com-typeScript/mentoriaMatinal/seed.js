require('dotenv').config();
const Importer = require('mysql-import');

async function main() {
  const importer = new Importer({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  await importer.import('./database.sql');

  importer.disconnect();
}

main();

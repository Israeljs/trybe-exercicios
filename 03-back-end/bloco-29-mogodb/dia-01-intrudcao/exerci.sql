// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'DATABASE_TESTE';
const collection = 'COLLECTION_TESTE';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);
db.collection.find()
db.collection.deleteMany({})
db.collection.insertMany(
  [
    {
    "nome": "Jose",
    "endereco": {
        "logradouro": "Rua 1",
        "regiao": "Zona Norte",
        "cidade": "São Paulo",
        "uf": "SP"
    }
},
{
    "nome": "Maria",
    "endereco": {
        "logradouro": "Rua 2",
        "cidade": "Belo Horizonte",
        "uf": "MG"
    }
}
  ]
)


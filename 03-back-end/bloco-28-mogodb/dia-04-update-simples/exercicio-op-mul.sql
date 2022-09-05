-- Operador $mul
-- O operador $mul multiplica o valor de um campo por um número especificado, persistindo o resultado dessa operação sem a necessidade do operador $set.
-- Considere a coleção products com o novo documento descrito abaixo:
-- Copiar
db.products.insertOne(
  { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
);
db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);
{ "_id": 1, "item": "ABC", "price": NumberDecimal("13.7375"), "qty": 50 }

db.products.insertOne(
  { _id: 2, item: "Unknown" }
);
db.products.update(
  { _id: 2 },
  { $mul: { price: NumberLong("100") } }
);
{ "_id": 2, "item": "Unknown", "price": NumberLong(0) }
-- Você também pode multiplicar valores com tipos diferentes. Veja o documento abaixo:
-- Copiar
db.products.insertOne(
  { _id: 3,  item: "XYZ", price: NumberLong("10") }
);
db.products.update(
  { _id: 3 },
  { $mul: { price: NumberInt(5) } }
);
{ "_id": 3, "item": "XYZ", "price": NumberLong(50) }
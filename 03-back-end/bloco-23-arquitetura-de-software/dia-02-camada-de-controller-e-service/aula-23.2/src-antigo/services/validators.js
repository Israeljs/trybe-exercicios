const runSchema = (schema) => async (data) => { // recebe um schema do joi e chama a função
  const { error, value } = schema.validate(data);
  if (error) { // if error vai direto pro middleware de error
    error.message = error.details[0].message;
    throw error;
  }
  return value; // retorna os dados
};

module.exports = { runSchema };
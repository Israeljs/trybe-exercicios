const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);

  // crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave
  // e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const casa = {
    porta: 'alumnio',
    telalhado: 'colonial'
}

function object(object, key, value) {
    object[key] = value;
    return object;
}
console.log(object(casa, 'janela', 'madeira'))

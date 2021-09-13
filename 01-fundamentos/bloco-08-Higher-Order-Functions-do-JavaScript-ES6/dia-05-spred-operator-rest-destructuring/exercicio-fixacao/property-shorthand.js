const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Observe que as propriedades do objeto a cima retornado e os argumentos que passamos 
// para newUser são idênticos.Essa repetição parece desnecessária, não é mesmo?

const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Altere a função getPosition utilizando a property shorthand .
const getPosition = (latitude, longitude) => ({
    // latitude: latitude,
    // longitude: longitude});
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  
  function createPerson(name){
    return {
      nomeCompleto: name,
      email: `${name}@trybe.com` 
    };
  }
  
  function enviarSalarios(name){
    console.log(`Processando - ${name}`)
    console.log('recuperar conta bancária pelo nome dela')
    console.log('fazer a transferência')
  
    return {
      success: true,
    }
  }
  
  const employees = newEmployees(createPerson);
  
  console.log(employees)
  
  newEmployees(enviarSalarios)

// outro

const person = {
    name: 'Wander',
    lastName: 'Luiz',
    greet: (greetCallback) => {
      const message = 'Oi!!!';    
  
      return `${message} ${greetCallback()}`;
    }
  }
  
  const greet = person.greet(formalGreet);
  
  console.log(greet);
  
  function formalGreet(name){
    
    return 'Está tudo na maior maravilha';
  }
  
  function badHumorGreet(name){
    viroACara();
  
    return 'Não fale comigo, que estou poucas!';
  }
  
  console.log(person.greet(badHumorGreet))

  
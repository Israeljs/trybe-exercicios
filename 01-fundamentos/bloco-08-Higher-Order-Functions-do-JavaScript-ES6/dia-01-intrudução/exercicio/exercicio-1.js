// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas 
// corretas (Gabarito), o segundo será um array de respostas a serem checadas
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const confere = (gabarito, respostas, verifica) => {
    const corretas = verifica(gabarito, respostas);
    return `Resultado final: ${corretas} corretas`;
}

const conta = (gabarito, respostas) => {
    let soma = 0;
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] === gabarito[i]) {
            soma += 1;
        }else if (respostas[i] !== gabarito[i] && respostas[i] === 'N.A') {
            soma -= 0;
        }else if (respostas[i] !== gabarito[i] && respostas[i] !== 'N.A') {
            soma -= 0.5;
        }
    }
    return soma;
}
console.log(confere(RIGHT_ANSWERS, STUDENT_ANSWERS, conta))
//   const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const repeat = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} corretas`;
// };

// console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
//   if (rAnswer === uAnswer) {
//     return 1;
//   } if (uAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// }));

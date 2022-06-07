const { questionFloat, question } = require('readline-sync')
const imc = require('./imc');
const outputToFile = require('./output');

const askHeigth = () => {
  const height = questionFloat('Digite sua altura: ');
  return (height > 3 || height <= 0) ? askHeigth() : height
}

const askMass = () => {
  const mass = questionFloat('Digite seu peso: ');
  return mass <= 0 ? askMass() : mass
}

const main = ()=> {
  const name = question('Digite seu nome: ')
  const mass = askMass();
  const height = askHeigth();
  const perssonalIndex = imc(mass, height);
  const output = outputToFile(name, perssonalIndex)

  return output, console.log('Um arquivo com seu IMC foi criado!');
}

main();

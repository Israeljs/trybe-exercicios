const { questionFloat, question } = require('readline-sync')

const askName = () => question('Digite seu nome: ');

const askHeigth = () => {
  const height = questionFloat('Digite sua altura: ');
  return (height > 3 || height <= 0) ? askHeigth() : height
}

const askMass = () => {
  const mass = questionFloat('Digite seu peso: ');
  return mass <= 0 ? askMass() : mass
}

module.exports = {
  askName,
  askHeigth,
  askMass
}

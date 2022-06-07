const { askName, askMass, askHeigth } = require('./question')
const imc = require('./imc');
const outputToFile = require('./output');


const main = ()=> {
  const name = askName();
  const mass = askMass();
  const height = askHeigth();
  const perssonalIndex = imc(mass, height);
  outputToFile(name, perssonalIndex)
}

main();

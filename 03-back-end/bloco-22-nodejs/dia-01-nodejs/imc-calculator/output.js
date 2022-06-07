const fs = require('fs');

const outputToFile = (name, perssonalIndex) => {
  fs.writeFileSync('./imc.txt', `Oi, ${name}. Seu IMC é ${perssonalIndex}`)
  console.log('Um arquivo com seu IMC foi criado!');
}

module.exports = outputToFile;

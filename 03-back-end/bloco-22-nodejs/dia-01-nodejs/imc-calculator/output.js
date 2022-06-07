const fs = require('fs');

const outputToFile = (name, perssonalIndex) => {
  fs.writeFileSync('./imc.txt', `Oi, ${name}. Seu IMC é ${perssonalIndex}`)
}

module.exports = outputToFile;

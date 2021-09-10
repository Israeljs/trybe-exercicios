// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) e retorne os dados de ano, mês e dia formatados.

const assert = require('assert');


function formatDate(year, month, day, ...time){
  // saveTime(time); //espera receber hora, minutos e segundos em formato de array []
  // console.log(time);

  return `${day}/${month}/${year}`
}

assert.strictEqual(formatDate('1981', '7', '31', '22', '47', '12', ',', 'a'), '31/7/1981');
const imc = (weight, height) => (weight / Math.pow(height, 2)).toFixed(2);

module.exports = imc;

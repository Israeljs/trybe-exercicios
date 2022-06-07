const mediaAlturas = (alturas) => {
  const maiorAltura = Math.max(...alturas);
  const menorAltura = Math.min(...alturas);
  const mediaAltura = alturas.reduce((acc, altura, _i, arr) => acc + altura) / alturas.length;

  let contador = 0;
  alturas.forEach(altura => {
    if (altura < mediaAltura) contador++;
  });

  return console.log(`Maior altura: ${maiorAltura}
Menor altura: ${menorAltura}
Média altura: ${mediaAltura.toFixed(2)}
Menores suas noTas: ${contador}
`);
};

mediaAlturas([1.80, 1.65, 1.80, 1.95, 1.50])

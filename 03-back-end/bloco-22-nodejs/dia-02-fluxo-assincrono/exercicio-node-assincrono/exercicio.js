function sum(n1, n2, n3) {
  const promise = new Promise((resolve, reject) => {
    // if (n1 !== Number && n2 !== Number && n3 !== Number)
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number')
      reject('Informe apenas números');

    const result = ((n1 + n2) * n3);

    if (result < 50) {
      return reject('Valor muito baixo');
    } 

    resolve(result);
  });

}
console.log(sum(10, 10, 10))
sum(10, 10, 10)
.then(resolve => console.log(resolve));
// .catch(error => console.log(error));

// function random() {
//   const p1 = Math.floor(Math.random() * 100 + 1);
//   const p2 = Math.floor(Math.random() * 100 + 1);
//   const p3 = Math.floor(Math.random() * 100 + 1);

//   sum(p1, p2, p3)
//     .then(resolve)
//     .catch(reject);
// }

// random();


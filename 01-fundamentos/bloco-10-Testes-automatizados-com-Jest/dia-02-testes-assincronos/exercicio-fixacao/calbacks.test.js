// Passa mesmo com erro
// test('Não deveria passar!', () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//     }, 500);
//   });

// usando o done() para esperar calbacks
// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error); // Alteramos esta linha
//     }
//   }, 500);
// });

// // mais exemplos

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});

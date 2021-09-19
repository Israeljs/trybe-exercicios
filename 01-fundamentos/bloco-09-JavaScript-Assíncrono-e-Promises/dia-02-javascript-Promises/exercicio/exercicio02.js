// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// - Primeiramente, instancie uma Promise
// - Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve 
// ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada')
// à Promise , só para que o código funcione e possamos ver o resultado.
// - Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
// const fetchPromise = () => {
//     const myPromise = new Promise((resolve, reject) => {
//       const myArray = Array.from(
//         { length: 10 },
//         () =>  Math.floor(Math.random() * 50) + 1
//       );
//       const sum = myArray.map(number => number * number)
//         .reduce((sum, number) => sum + number);
  
//       (sum < 8000) ? resolve(sum) : reject(sum);
//     });
  
//     myPromise
//       .then((sum) => console.log(`Promise resolvida ${sum}`))
//       .catch((sum) => console.log(`Promise rejeitada ${sum}`));
//   };
  
//   fetchPromise();


// async function fetchPromise(){
//   try {
//       const myArray = await Array.from(
//         { length: 10 },
//         () =>  Math.floor(Math.random() * 50) + 1
//       );
//       const sum = await myArray.map(number => number * number)
//         .reduce((sum, number) => sum + number);
  
//       if (sum < 8000) console.log((`Promise resolvida ${sum}`));
// } catch(error) {
//   console.log(error);
//   console.log('Promise rejeitada')
// }
  
// fetchPromise();

const fetchPromise = async () => {
  const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
        .reduce((sum, number) => sum + number);
  
      (sum < 8000) ? resolve(sum) : reject(sum);
    });
  try {
      const r = await myPromise
      console.log(`Promise resolvida ${r}`)
    } catch(error){
      console.log(`Promise rejeitada ${error}`) // Promise rejeitada 8726
    }
};
  
fetchPromise();

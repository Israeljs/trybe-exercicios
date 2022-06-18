let florest = ['amazon', 'borneo', 'cerrado', 'congo'];
florest.slice(2, 3); // ['cerrado', 'congo']

y = [1, 2, 3, 4, 5, 6]
y.slice(2, -2) // will return [3, 4]

console.log(y);
console.log(florest);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
const arr4 = [[...arr1], [...arr2]]; // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
const arr5 = [arr1, arr2]; // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

console.log(arr3);

const foo = [4, 2, 3];
const [n] = foo;
console.log(n); // 4

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f);

// update em um array de objetos
const perssons = [
  { id: 9, name: 'Natalia', age: 37, },
  { id: 11, name: 'Isabel', age: 1, },
  { id: 10, name: 'israel', age: 40, },
  { id: 12, name: 'Natiana', age: 34, },
];

// const { id: numero, ...oRestoDasIformacoes } = perssons[2];// Salvando o id na variável numero e todo o resto na oRestoDasIformacoes

const update = () => {
  const perssonIndex = perssons.findIndex(({ id }) => id === 10);
  perssons[perssonIndex] = { ...perssons[perssonIndex], name: 'israel jerônimo', age: 41 };

  return perssons;
}

console.log(update());
console.log(perssons);
console.log(oRestoDasIformacoes);


const categoryBody = [1,2,10];
const categoryDB = [1,2,3,4,5,6,7,8,9,10];

// const isIqual = categoryBody.every((categoryId) => {
//   const result = categoryDB.some((catDBid) => catDBid === categoryId)
//   return result;
// });

const isIqual = categoryBody.every((categoryId) => {
  const result = categoryDB.includes(categoryId);
  return result;
});

console.log(isIqual);

let obj = {cara: 'bob'}
obj2 = obj // {cara: 'bob'}
obj2.cara = 'mario'
obj // {cara: 'mario'}
// O original modificou porque a cópia ainda está referenciada ao original…
// Mas se vc cria um objeto novo {}  e passa os valores de um outro objeto com o spread = {…obj}  a referencia some.
const obj1 = {cara: 'bob'}
obj2 = {...obj1} // {cara: 'bob'}
obj2.cara = 'mario'
obj1 // {cara: 'bob'}
obj2 // {cara: 'mario'}

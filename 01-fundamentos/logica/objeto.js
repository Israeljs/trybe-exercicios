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

const update = () => {
  const perssonIndex = perssons.findIndex(({ id }) => id === 10);
  perssons[perssonIndex] = { ...perssons[perssonIndex], name: 'israel jerônimo', age: 41 };

  return perssons;
}

console.log(update());

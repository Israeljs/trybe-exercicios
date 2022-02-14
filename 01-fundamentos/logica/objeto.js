let florest = ['amazon', 'borneo', 'cerrado', 'congo'];
florest.splice(0, 2); // ['cerrado', 'congo']

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

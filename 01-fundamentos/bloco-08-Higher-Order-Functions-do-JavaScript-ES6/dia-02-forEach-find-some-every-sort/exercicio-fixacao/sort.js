const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// ordenar o array pela idade das pessoas em ordem crescente .
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // people.sort((personA, personB) => personA.age - personB.age);

  people.sort((personA, personB) => personB.age - personA.age);
  
  console.log(people);

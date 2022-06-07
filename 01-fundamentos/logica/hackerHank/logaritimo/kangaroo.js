// dada a posição inicial e a distância de salto de dois cangurus, 
// determine se eles estariam na mesma posição no mesmo número de salto

function kangaroo(x1, v1, x2, v2) {
  let s = '';
  if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) > 0 && (v1 - v2) > 0) {
    s = 'YES';
  } else {
    s = 'NO';
  }
  return s;
};

// console.log(kangaroo(8, 4, 2, 2));
console.log(kangaroo(8, 4, 2, 2));

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let index = 0; index < numbers.length; index++) {
    let verifica = numbers[index] % 2 === 1
    if (verifica === true) {
        impar += 1;

}
}
console.log(impar);

if (impar === 0) {
    console.log("nenhum valor ímpar encontrado");
}
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

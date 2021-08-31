// 1 - Crie uma função que receba um número e retorne seu fatorial.
fatorial = n => {
    let fatorial = 1;

    for (let i = n; i > 1; i--) {
        // fatorial *= i
        fatorial = fatorial * i;

    }
        console.log(fatorial)
    
}



fatorial = n => {
if (n == 0) {
    return 1;
} else {
return (n * fatorial(n - 1));
}
}
console.log(fatorial(4))
// function calcularFatorialRecursivamente (n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * calcularFatorialRecursivamente (n - 1);
// }
// console.log(calcularFatorialRecursivamente(4))
 
// function calcularFatorial (fatorial) {
//     if (isNaN(fatorial)) {
//         return 'Não existe fatorial de um texto';
//     }
     
//     if (!Number.isInteger(fatorial) || fatorial < 0) {
//         return 'Não existe fatorial de um número não natural';
//     }
     
//     if (fatorial === 0 || fatorial === 1) {
//         return 1;
//     }
     
//     return calcularFatorialRecursivamente(fatorial);
// }
 
// console.log(calcularFatorial(4));


// function contador(n1) { recursividade
//     if (n1 === 1) {
//         return console.log(n1);
//     }
//     console.log(n1);
//     contador(n1 - 1);
// }
// contador(3)

// Crie uma função que receba uma frase e retorne qual a maior palavr
 
function maiorPalavra(string) {
    let arr = string.split(" ");
    // let maior = 0;
    // let palavra = null;
return arr[3].length;
    // for (let i = 0; i < arr.length; i++) {    
    //     if (maior < arr[i].length) {
    //         maior = arr[i].length;
    //         palavra = arr[i];
    //     }
    // }
    // return palavra;
}
console.log(maiorPalavra("bom dia a todos"));
function indiceDoMaiorValor(arra) {
    let array = arra;
    let maiorIndice = array[0];

    for (let key in array) {
        if (array[key] > maiorIndice) {
            maiorIndice = array[key];
            
        }
    }
    return maiorIndice;
    
}

console.log("Valor esperado no retorno da função: " + indiceDoMaiorValor([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

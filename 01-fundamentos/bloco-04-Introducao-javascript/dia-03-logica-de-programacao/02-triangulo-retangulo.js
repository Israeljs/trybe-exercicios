let n = 5;

if (n > 1) {
    for (let index = 0; index < n; index++) {
        let texto = "";
        //no fim da primeira iteração o index recebe 1
        //então o INDICE vai de 0 a 1 na primeira ieração 
        for (let indice = 0; indice <= index; indice++) {
            texto += "*"           
        }
        console.log(texto)
    }
} else {
    console.log("Digite um valor maior que 1!")
}
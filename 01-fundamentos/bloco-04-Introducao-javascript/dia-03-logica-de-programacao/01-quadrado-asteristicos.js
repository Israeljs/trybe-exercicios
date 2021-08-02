let n = 5;
if (n > 1) {
    for (let index = 0; index < n; index++) {
        let texto = "";

        for (let indice = 0; indice < n; indice++) {
            texto += "*"           
        }
        console.log(texto)
    }
} else {
    console.log("Digite um valor maior que 1!")
}
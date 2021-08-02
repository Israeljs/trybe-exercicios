let n = 5;
let texto = "*";
let espaco = "    ";

if (n > 1) {
    for (let i = 0; i < n; i++) {
        console.log(espaco + texto);
        texto += "*";
        espaco = espaco.substring(0, espaco.length - 1);
      }
} else {
    console.log("Digite um valor maior que 1!")
}


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// var aString = '12345';

// console.log(aString.substr(2, 1)); //  "   4"
// console.log(aString.substr(1, 3)); 
// console.log(aString.substr(0, 5)); 

//var aString = 'Mozilla';
// console.log(aString.substr(0, 1));   // 'M'
// console.log(aString.substr(1, 0));   // ''
// console.log(aString.substr(-1, 1));  // 'a'
// console.log(aString.substr(1, -1));  // ''
// console.log(aString.substr(-3));     // 'lla'
// console.log(aString.substr(1));      // 'ozilla'
// console.log(aString.substr(-20, 2)); // 'Mo'
// console.log(aString.substr(20, 2));  // ''
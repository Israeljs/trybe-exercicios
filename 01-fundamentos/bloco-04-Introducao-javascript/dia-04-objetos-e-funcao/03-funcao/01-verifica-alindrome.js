function verificaPalindrome(palavra) {

    let str = palavra
    let reverte = str.split('').reverse().join('')

    if (str === reverte) {
        return true
    } else {
        return false
    }
    
}

console.log('Retorno esperado: ' + verificaPalindrome('arara'))
function isRotated(str1, str2) {
    // your code here
    let frase1 = Array.from(str1);
    let contador = 0;
    let encontrado = false;

    while (contador < frase1.length || encontrado == true) {
        let final = "";
        prueba1 = frase1.slice(frase1.length - contador - 1).concat(frase1.slice(0, frase1.length - contador - 1));
        for (let i of prueba1) {
            final += i;
        }
        contador += 1;
        if (final == str2) {
            return encontrado = true;
        }
    
    }
    return false;
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false
function flipEveryNChars(input, n) {
    // your code here
    let arr = Array.from(input);
    console.log(arr)
    let frase = "";
    for (let i = 0; i < input.length; i += n) {
        let secciones = Array.from(input).slice(i, i+n).reverse().join("");
        frase += secciones;
    }
    return frase;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
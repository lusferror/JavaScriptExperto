// Write your function here
function countAllCharacters(word) {
    let palabra = word.split(" ");
    
    let newObj = {};
    for (let i of word) {
        if (i != " ") {
            let contador = 0;
            for (let j of word) {
                if (j == i) {
                    contador += 1;
                }
            }
        newObj[i] = contador;
        }
        
    }
    return newObj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
function repeatString(string, num) {
    // your code here
    let palabra="";
    for(let i=0; i<num ; i++){
        palabra+=string;
    }
    return palabra;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
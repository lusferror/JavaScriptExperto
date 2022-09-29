function detectOutlierValue(string) {
    // your code here
    let cadena=string.split(" ");
    let esPar=0;
    let esImpar=0;
    let posicionIm=0;
    let posicionP=0;
    for(let l=0;l<cadena.length; l++){
        let n=parseInt(cadena[l]);
        if (n%2==0){
            esPar+=1;
            posicionP=l+1;
        }
        else{
            esImpar+=1;
            posicionIm=l+1;
        }
    }
    if(esImpar>esPar){
        return posicionP;
    }
    else{
        return posicionIm;
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2
function sumDigits(num) {
    // your code here
    let letra=num.toString();
    let acum=0;
    for(let i=0;i<letra.length;i++) {
        if(letra[i]=="-"){
            acum+=parseInt(letra[i]+letra[i+1])
            i++;
        }
        else{
            acum+=parseInt(letra[i]);
        }
    };
    return acum;
}
let output = sumDigits(-316);
console.log(output); // --> 4
function multiplyBetween(num1, num2) {
    // Your code here
    let resultado=1;
    if(num2<num1){
        return 0;
    }
    else{
        for(let i=num1;i<num2;i++){
            resultado=resultado*i;
        }
        return resultado;
    }

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
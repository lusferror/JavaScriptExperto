function computeSumBetween(num1, num2) {
    // Your code here
    let resultado=0;
    if(num2<num1){
        return 0;
    }
    else{
        for(let i=num1;i<num2;i++){
            resultado+=i;
        }
        return resultado;
    }

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
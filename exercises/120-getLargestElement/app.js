function getLargestElement(arr) {
  // your code here
  var aux=0;
    if(arr.length<1) return 0;
    else{
        arr.forEach(element => {
           if(element>aux) aux=element; 
        });
        return aux;
    }
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
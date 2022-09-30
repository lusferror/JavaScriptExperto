function getLongestElement(arr) {
    // your code here
    var aux="";
    if(arr.length<1) return "";
    else{
        arr.forEach(element => {
           if(element.length>aux.length) aux=element; 
        });
        return aux;
    }
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
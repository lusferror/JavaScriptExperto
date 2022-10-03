function findShortestElement(arr) {
    // your code here
    var aux=arr[0];
    if(arr.length<1) return "";
    else{
        arr.forEach(element => {
           if(element.length<aux.length) aux=element; 
        });
        return aux;
    }
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
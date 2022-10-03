function getLengthOfLongestElement(arr) {
    // Your code here
    let logn=0
    if( !Array.isArray(arr) || arr.length==0){
        return 0;
    }
    else{
        console.log(arr)
        arr.forEach(element=>{
            if(element.length>logn){
                logn=element.length;
            }
        })
    }
    return logn;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
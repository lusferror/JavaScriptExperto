function findSmallestElement(arr) {
    // your code here
    let min=arr[0];
    if(arr.length<1) return 0;
    else{
        arr.forEach(element => {
            if(min>element) min=element;
        });
    return min;
    }
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
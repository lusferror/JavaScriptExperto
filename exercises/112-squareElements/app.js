function squareElements(arr) {
  // your code here
  let newarr=[]
  if (!Array.isArray(arr) || arr.length == 0) {
    return arr;
  }
  else {
    arr.forEach(element => {
      newarr.push(element ** 2);
    });
    return newarr;
  }
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
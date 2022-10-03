function computeProductOfAllElements(arr) {
  // your code here
  if (!Array.isArray(arr) || arr.length == 0) {
    return 0
  }
  else {
    let acum = 1
    arr.forEach(element => {
      acum = acum * element;
    });
    return acum;
  }
  
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60


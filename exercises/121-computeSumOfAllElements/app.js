function computeSumOfAllElements(arr) {
  // your code here
  acum=0;
  arr.forEach(element => {
    acum+=element;
  });
  return acum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
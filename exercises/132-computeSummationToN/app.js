function computeSummationToN(n) {
  // your code here
  let acum=0;
  for(let i=0;i<n;i++){
    acum+=i+1;
  }
   return acum; 
}

let output = computeSummationToN(6);
console.log(output); // --> 21


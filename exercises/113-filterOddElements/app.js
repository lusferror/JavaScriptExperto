function filterOddElements(arr) {
  // your code here
  var newArr=[];
  if( !Array.isArray(arr) || arr.length==0){
    return []
  }
  else{
      arr.forEach(element => {
      if(element%2!=0){
        newArr.push(element)
      }
    });
    return newArr;
  }
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

function filterEvenElements(arr) {
    // your code here
    var newArr=[]
    if( !Array.isArray(arr) || arr.length==0){
      return newArr;
    }
    else{
      arr.forEach(element => {
        if(element%2==0){
          newArr.push(element)
        }
      });
      return newArr;
    }
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

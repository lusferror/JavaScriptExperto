let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    var newArr=[]
    if( !Array.isArray(obj[key]) || obj[key].length==0){
      return newArr;
    }
    else{
      obj[key].forEach(element => {
        if(element%2!=0){
          newArr.push(element)
        }
      });
      return newArr;
    }
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
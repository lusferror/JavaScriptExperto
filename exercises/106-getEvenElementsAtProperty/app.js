
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    var newArr=[]
    if( !Array.isArray(obj[key]) || obj[key].length==0){
      return newArr;
    }
    else{
      obj[key].forEach(element => {
        if(element%2==0){
          newArr.push(element)
        }
      });
      return newArr;
    }
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    var newArr=[]
    if( !Array.isArray(obj[key]) || obj[key].length==0 || !obj[key]){
      return []
    }
    else{
      obj[key].forEach(element => {
        if(element.length%2==0){
          newArr.push(element)
        }
      });
      return newArr;
    }
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
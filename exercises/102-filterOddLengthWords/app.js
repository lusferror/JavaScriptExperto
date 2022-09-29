function filterOddLengthWords(words) {
    // your code here
    var newArr=[]
    if( !Array.isArray(words) || words.length==0){
      return []
    }
    else{
        words.forEach(element => {
        if(element.length%2!=0){
          newArr.push(element)
        }
      });
      return newArr;
    }
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
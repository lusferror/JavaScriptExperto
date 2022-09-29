function filterEvenLengthWords(words) {
    // your code here
    var newArr=[]
    if( !Array.isArray(words) || words.length==0){
      return []
    }
    else{
        words.forEach(element => {
        if(element.length%2==0){
          newArr.push(element)
        }
      });
      return newArr;
    }
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
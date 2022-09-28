function getAllLetters(str) {
    // your code here
    let array=[];
    for (let i of str){
        if(i!=" "){
            array.push(i);
        }
    }
    return array;
}
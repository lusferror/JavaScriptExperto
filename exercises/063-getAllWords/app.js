function getAllWords(str) {
    // your code here
    let newArray=[];
    let palabra="";
    for (let i=0; i<str.length; i++){
        if(str[i]!=" "){
            palabra+=str[i];
            if(i==str.length-1){
                newArray.push(palabra);
            }
        }
        else {
            newArray.push(palabra);
            palabra=""
        }
    }
    return newArray;
}
// Write your function here
function findMinLengthOfThreeWords(word1,word2,word3){
    let min;
    if (word1.length<word2.length){
        min=word1
    }
    else{
        min=word2;
    }
    if(min.length>word3.length){
        min=word3;
    }
    return min.length;
}

console.log(findMinLengthOfThreeWords("a","be","see"))
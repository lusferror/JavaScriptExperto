// Write your function here
function getIndexOf(word1,word2){
    for(let i=0;i < word2.length;i++){
        if(word2[i]==word1){
            return i;
        }
        else if (i==word2.length-1){
            return -1
        }
    }
}
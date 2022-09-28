function countCharacter(str, char) {
    // your code here
    let contador=0
    for(let i of str){
        if(i==char){
            contador=contador+1;
        }
    }
    return contador;
}
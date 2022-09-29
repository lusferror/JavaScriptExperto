// Write your function here
function getAverageOfElementsAtProperty(obj,key){
    let average=0;
    if (obj[key]==0){
        return 0
    }
    else {
    for(let i of obj[key]){
        average+=i;
    }
    return(average/obj[key].length);
    }
}
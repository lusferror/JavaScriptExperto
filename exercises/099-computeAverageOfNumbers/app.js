// Write your function here !
function computeAverageOfNumbers(arr){
    let sum=0;
    if (!Array.isArray(arr) || arr.length == 0) {
        return 0;
    }
    else {
        arr.forEach(element=>{
            sum+=element;
        })
        return (sum/arr.length)
    }
}
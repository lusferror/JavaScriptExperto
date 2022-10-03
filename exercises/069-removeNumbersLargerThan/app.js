let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
<<<<<<< HEAD
    for (let key in obj){
        if(obj[key]>num){
            delete obj[key];
        }
=======
    for(let key in obj){
        if(obj[key]>num) delete obj[key];
>>>>>>> e4a56d2 (ingresando de nuevo los ejerecicios borrados)
    }
    return obj;
}

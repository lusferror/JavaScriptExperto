let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
<<<<<<< HEAD
    for (let key in obj){
        if(obj[key]<num){
            delete obj[key];
        }
=======

    for (let key in obj) {
        if (obj[key] < num) delete obj[key];
>>>>>>> 1bd1ee0 (estoy cansado de hacer ejercicios)
    }
    return obj;
}

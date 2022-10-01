function findPairForSum(array, number) {
    let resultado = 0;
    var a = [];
    array.forEach(element => {
        resultado = number - element;
        for (let e of array){
        if (e == resultado) {
            a.push(e);
            break;
        }
    }
    })
    return a;
};
let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
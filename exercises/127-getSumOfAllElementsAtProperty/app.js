let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here.
    let acum=0;
    if( !obj.hasOwnProperty(key) || !Array.isArray(obj[key])) return 0;
    else{
        obj[key].forEach(element => {
            acum+=element;
        });
        return acum;
    }
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
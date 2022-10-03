// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }
    let newArr = []
    obj[key].forEach(element => {
        if (element == 10) {
            newArr.push(element)
        }
    });
    return newArr;
}

let obj = {
    key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
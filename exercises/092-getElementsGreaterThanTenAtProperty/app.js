// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }
    let newArr = []
    obj[key].forEach(element => {
        if (element > 10) {
            newArr.push(element)
        }
    });
    return newArr;
}
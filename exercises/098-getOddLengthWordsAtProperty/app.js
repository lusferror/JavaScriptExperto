// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let newArr = []
    if (!Array.isArray(obj[key]) || obj[key] == 0 || !obj[key]) {
        return newArr;
    }
    else {
        obj[key].forEach(element => {
            if (element.length % 2 != 0) newArr.push(element);
        });
        return newArr;
    }
}


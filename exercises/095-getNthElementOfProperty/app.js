// Write your function here
function getNthElementOfProperty(obj, key, num) {
    var arr = obj[key]
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return undefined;
    }
    else {
        return obj[key][num];
    }
}
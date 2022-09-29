let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key]) || obj[key].length == 0 || !obj[key]) return [];
    else {
      let logn = obj[key][1];
      obj[key].forEach(element => {
        if (logn < element) {
          logn = element;
        }
      })
  return logn
    }
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // -->4
let obj = {
 // key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key]) || obj[key].length == 0 || !obj[key]) return [];
  else {
    let logn = obj[key][1];
    obj[key].forEach(element => {
      if (logn > element) {
        logn = element;
      }
    })
    return logn;
  }
  
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
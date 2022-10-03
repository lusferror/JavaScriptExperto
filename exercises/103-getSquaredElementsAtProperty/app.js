let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  // your code here
  let arr = [];
  if (!Array.isArray(obj[key]) || obj[key].length == 0) {
    return arr;
  }
  else {
    obj[key].forEach(element => {
      arr.push(element ** 2);
    });
    return arr;
  }
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
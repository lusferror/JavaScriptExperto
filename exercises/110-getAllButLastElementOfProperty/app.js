let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
      let arr=[];
      if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
      else { 
        for (let index = 0; index < obj[key].length-1; index++) {
          arr.push(obj[key][index]);
        }
      return arr;
        }
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
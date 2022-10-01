function getAllKeys(obj) {
  // your code here
  let arr = [];
  for(let element in obj){
    arr.push(element);
  }
  return arr
}

function convertObjectToList(obj) {
  // your code here
  let arr=[];
  for(let element in obj){
    let arr2=[]
    arr2.push(element)
    arr2.push(obj[element])
    arr.push(arr2);
  }
  return arr;

}
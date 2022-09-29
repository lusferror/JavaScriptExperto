function transformFirstAndLast(array) {
  // your code here
  let obj={}
  let longitud=array.length;
  obj[array[0]]=array[longitud-1];
  return obj;
}


let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output); // { Kevin: "Spacey" };
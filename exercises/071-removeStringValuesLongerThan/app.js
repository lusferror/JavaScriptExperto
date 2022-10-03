 function removeStringValuesLongerThan(num, obj) {
  // your code here
<<<<<<< HEAD
  for(let key in obj){
    if (obj[key].length>num){
      delete obj[key];
    }
  }
  return obj;
=======
  for (let key in obj){
    if(obj[key].length>num){
        delete obj[key];
    }
}
return obj;
>>>>>>> 8ee5e13
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);

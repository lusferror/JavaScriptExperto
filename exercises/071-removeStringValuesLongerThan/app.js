 function removeStringValuesLongerThan(num, obj) {
  // your code here
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cb96779 (realice 15 ejerecicios)
  for(let key in obj){
    if (obj[key].length>num){
      delete obj[key];
    }
  }
  return obj;
<<<<<<< HEAD
=======
  for (let key in obj){
    if(obj[key].length>num){
        delete obj[key];
    }
}
return obj;
>>>>>>> 8ee5e13
=======
>>>>>>> cb96779 (realice 15 ejerecicios)
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);

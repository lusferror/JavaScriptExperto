function fromListToObject(array) {
  // your code here
  var obj={};
  array.forEach(element => {
      let key=element[0];
      obj[key]=element[1];
    });
    return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }
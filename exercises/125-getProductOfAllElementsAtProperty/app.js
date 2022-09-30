let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let acum=1;
    if(!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])){
      return 0;
    }
    else{
      obj[key].forEach(element => {
        acum=acum*element;
      });
      return acum;
    }
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
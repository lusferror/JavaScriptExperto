function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let sum=0;
    if (!Array.isArray(obj[key]) || obj[key].length == 0 || !obj[key]) {
        return 0;
    }
    else {
        obj[key].forEach(element=>{
            sum+=element;
        })
        return (sum/obj[key].length)
    }

}
// Write your function here
function getFirstElementOfProperty(obj,key){
    var arr=obj[key]
    if(!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])){
        return undefined;
    }
    else{
        return arr[0];
    }
}
let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1
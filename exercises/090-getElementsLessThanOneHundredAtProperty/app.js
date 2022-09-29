// Write your function here
function getElementsLessThan100AtProperty(obj,key){
    let newArray=[];
    if(!obj[key] || obj[key]==0 || !Array.isArray(obj[key])){
        return [];
    }
    else{
        obj[key].forEach(element => {
            if(element<100){
                newArray.push(element);
            }
            
        });
        return newArray;
    }
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
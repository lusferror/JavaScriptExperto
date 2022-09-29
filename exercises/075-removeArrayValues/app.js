function removeArrayValues(obj) {
    // your code here
    for(let key in obj){
        if(typeof obj[key]=="object"){
            delete obj[key];
        }
    }
}

let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for(let key in obj2){
        var encontrado=false;
        for(let door in obj1){
            if(key==door){
                encontrado=true;
                break;
            }
        }
        if(encontrado==false){
            obj1[key]=obj2[key]
        }
    }
    return obj1;
}

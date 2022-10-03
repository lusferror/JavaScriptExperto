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
    var arr1=Object.keys(obj1);
    var arr2=Object.keys(obj2);
    console.log(arr1);
    console.log(arr2);
    for(let i of arr2){
        console.log("esto es i: "+i)
        var encontrado=false;
        var contador=0;
        for( var j of arr1){
            console.log("compara j:"+j+" con "+i);
            if (j==i){
                encontrado=true;
                break;
            }
            else if (contador==arr2.length-1 && encontrado==false){
                obj1[i]=obj2[i];
                console.log(obj1)
            }
            contador+=1;
        }  
    }
    return obj1;
}
console.log(extend(obj1,obj2))

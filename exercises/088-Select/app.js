// Write your function here
function select(arr, obj) {
    let newObj = {}
    arr.forEach((e,index)=>{
        console.log(index)
        if(obj[e]){
            newObj[e] = obj[e]
        }
    })

    return newObj
}

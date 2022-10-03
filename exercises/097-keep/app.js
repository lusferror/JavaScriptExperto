// Write your function here
function keep(arr, num) {
    let newArr = [];
    arr.forEach(element => {
        if(element==num) newArr.push(element);
    });
    return newArr;
}
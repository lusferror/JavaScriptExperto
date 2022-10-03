function convertDoubleSpaceToSingle(str) {
    // your code here
    var myArray=str.split("  ");
    return myArray.join(" ");
    
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

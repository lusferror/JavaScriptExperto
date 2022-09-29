function transformEmployeeData(array) {
  // your code here
  let arrayGrande=[]
  for(let matrix of array){
    let obj={};
    for(let colum of matrix){
      obj[colum[0]]=colum[1];
    }
    arrayGrande.push(obj)};
  return arrayGrande;
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]
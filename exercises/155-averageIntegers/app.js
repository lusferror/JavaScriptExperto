function average(array_of_numbers) {
  // process array of numbers
  let plus=sum(array_of_numbers);
  return plus/array_of_numbers.length;
}

function sum(numbers) {
    let acum=0
    for(let i of numbers){
      acum+=i;
    }
    return acum;
}
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
  let set1 =new Set(Array.from(text));
  let contador=0;
  set1.forEach(() => {
    contador+=1;
  });
  if(contador==text.length){return true}
  else {return false};
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false
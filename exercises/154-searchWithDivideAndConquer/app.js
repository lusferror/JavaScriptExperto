function search(array, value) {
  // your code here
  let mitad = Math.floor(array.length / 2);
  let inicio = 0
  let fin = array.length - 1;
  let contador = 0;
  do {
    if (array[mitad] == value) {
      return mitad;
    }
    else if (array[mitad] > value) {
      mitad -= Math.floor((mitad - inicio) / 2);
    }
    else {
      mitad += Math.floor((fin - mitad) / 2);
    }
    contador += 1;
  } while (contador != Math.floor(array.length/2)|| array[mitad] == value)

  if (array[mitad] == value) {
    return mitad;
  }
  else if (array[inicio] == value) {
    return inicio;
  }
  else if (array[fin] == value) {
    return fin;
  }
  else {
    return null;
  }
}
let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 8)); // => 4

function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  let palindromo = isPalindrome(sentence.toLowerCase());
  let mayor = ""
  if (palindromo.length < 2) {
    mayor = palindromo.join("")
  }
  else {
    for (let i = 0; i < palindromo.length - 1; i++) {
      let a = palindromo[i];
      let b = palindromo[i + 1];
      if (sortAscendingByLength(a, b) == 1 || sortAscendingByLength(a, b) == 0) {
        mayor = palindromo[i];
      }
      else if (sortAscendingByLength(a, b) == -1) {
        mayor = palindromo[i + 1];
      }
    }
  }
  sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~'()]/gi, "").split(" ").forEach(element=>{
    if(mayor==element.toLowerCase()){
      mayor=element;
    }
  })
  return mayor;
}

function reverseString(string) {
  let frase = Array.from(string).reverse().join("").split(" ");
  return frase;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  let palabra = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~'()]/gi, "");
  let texto = palabra.split(" ");
  let frase = reverseString(palabra);
  let palindromo = [];
  let aux = [];
  texto.forEach((element, indice) => {
    frase.forEach((item, index) => {
      if (element == item) {
        palindromo.push(element);
        console.log()
        if ((indice != 0 && index != frase.length - 1) || !(indice != texto.length - 1 && index != 0)) {
          if (texto[indice - 1][texto[indice - 1].length - 1] + element + texto[indice + 1][0] == frase[index - 1][frase[index - 1].length - 1] + item + frase[index + 1][0]) {
            palindromo.push(texto[indice - 1][texto[indice - 1].length - 1] + " " + element + " " + texto[indice + 1][0])
          }
          else if (element + texto[indice + 1][0] == item + frase[index + 1][0]) {
            palindromo.push(element + " " + texto[indice + 1][0]);
          }
          else if (texto[indice - 1][texto[indice - 1].length - 1] + element == frase[index - 1][frase[index - 1].length - 1] + item) {
            palindromo.push(texto[indice - 1][texto[indice - 1].length - 1] + element);
          }

        }
        else if (indice == 0 && index == 0) {
          if (element + texto[indice + 1][0] == item + frase[index + 1][0]) {
            palindromo.push(element + " " + texto[indice + 1][0])
          }
        }
        else if (indice == texto.length - 1 && index == frase.length - 1) {
          if (texto[indice - 1][texto[indice - 1].length - 1] + element == frase[index - 1][frase[index - 1].length - 1] + item) {
            palindromo.push(texto[indice - 1][texto[indice - 1].length - 1] + element);
          }
        }
      }
    });
  });
  let arr = new Set(palindromo);
  for (let i of arr) {
    aux.push(i);
  }
  return aux;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}
// let output = "Madam, i mada";
// // console.log(reverseString(output.toLowerCase()))
// console.log(isPalindrome(output.toLowerCase()))
// console.log(findLongestPalindrome("My dad is a racecar athlete"));
console.log(findLongestPalindrome("Madam, i'm adam"));
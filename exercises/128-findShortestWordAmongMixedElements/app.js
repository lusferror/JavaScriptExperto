function findShortestWordAmongMixedElements(arr) {
    // your code here
    let aux = '9999999999999999999999';

    if (arr.length > 0) {
        let hasString = arr.find((e) => typeof e == 'number');
        if (hasString != undefined) {
          arr.map((e) => {
            if (e.length < aux.length) {
              aux = e;
            }
          });
        } else {
          aux = 0;
        }
      } else {
        aux = 0;
      }
      return aux;
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
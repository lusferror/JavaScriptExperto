let inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(shoeList) {
  let arrGrande=[];
  for (let element of shoeList) {
    let arr=[];
    for (let item of element.shoes) {
      if ((item.name).search(/black/i) >= 0) {
        arr.push(element.name,item.name,item.price)
        arrGrande.push(arr)
      }
    }
  }
  return arrGrande;
}

console.log(renderInventory(inventory))
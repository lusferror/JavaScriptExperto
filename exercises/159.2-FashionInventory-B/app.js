function renderInventory(inventory) {
    let newArr=[];
  for(let element of inventory){
    var newObj={};
    let average=0;
    let contador=0;
    for(let item of element.shoes){
        average+=item.price;
        contador+=1;
    }
    newObj.name=element.name;
    newObj.averagePrice=average/contador;
    newArr.push(newObj);
  }
  return newArr;

}

let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

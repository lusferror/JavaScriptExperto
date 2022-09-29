let currentInventory = [
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

output2 = [
    {
        name: 'Adidas',
        shoes: [
            { name: 'ZX 2K BOOST SHOES', price: 150 },
            { name: 'MULTIX SHOES', price: 80 },
        ]
    },
    {
        name: 'Nike',
        shoes: [
            { name: 'Jordan 6 Rings', price: 170 },
            { name: 'Nike Air Max 2090 EOI', price: 160 }
        ]
    }]

function renderInventory(inventory) {
    // your code here
    // hint: before you just dive into coding...
    // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
    
    let newArrGrande=[];
    for(let element of inventory){
        for(let item of element.shoes){
            //  console.log(item.name)
            let newArr=[];
            newArr.push(element.name,item.name,item.price);
            newArrGrande.push(newArr)
        }
    }
    // newArr.push(disenador,nombreZapato,precioZapato)
    return newArrGrande;
}
// console.log(renderInventory(currentInventory))
console.log(renderInventory(output2))
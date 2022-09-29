function getLaceNameDataForShoes(inventory) {
    let arr=[];
    for (let element of inventory) {
        for (let item of element.shoes) {
            // if(item.name.search("lace")!=-1){
                let newObj = {};
                item.name.split(" ").forEach((element,index) => {
                    if(element.search("lace")!=-1){ 
                    
                    newObj.nameWords = item.name.split(" ");
                    newObj.targetWordIndex=index;
                }
            });
            if(Object.keys(newObj).length>1) arr.push(newObj);
        }

    }
    ;
    return arr;
}

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

console.log(getLaceNameDataForShoes(inventory))
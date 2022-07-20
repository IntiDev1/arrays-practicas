const products = [
    {title: "Pizza", price: 121, id: "11"},
    {title: "Burger", price: 120, id: "22"},
    {title: "PanCakes", price: 125, id: "33"},
]

const myProducts = [];
console.log('products', products);
console.log('myProducts', myProducts);
console.log('_'.repeat(10));

//const product = products.find(item => item.id === '22');
//if (product) {
//    myProducts.push(product);
//}

const productIndex = products.findIndex(item => item.id === '22');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('_'.repeat(10));

//delete one element without not deleting it from the original list
const productsOr = [
    {title: "Pizza", price: 121, id: "11"},
    {title: "Burger", price: 120, id: "22"},
    {title: "PanCakes", price: 125, id: "33"},
];

const products2 = products.filter(item => item.id != '22');

console.log("original: ", productsOr);
console.log("product2: ", products2);


// updates
const productsV2 = [
    {title: "Pizza", price: 121, id: "11"},
    {title: "Burger", price: 120, id: "22"},
    {title: "PanCakes", price: 125, id: "33"},
];

const update = {
    id: "33",
    changes: {
        price: 200,
        description: 'delicious',
    }
};

const productIndx = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndx] = {
    ...productsV2[productIndx],
    ...update.changes,
};
console.log("changes", productsV2);


//
const productsV3 = [
    {title: "Pizza", price: 121, id: "11"},
    {title: "Burger", price: 120, id: "22"},
    {title: "PanCakes", price: 125, id: "33"},
];

const update2 = {
    id: "33",
    changes: {
        price: 200,
        description: 'delicious',
    }
};

//const productIndexV3 = productsV3.findIndex(item => item.id === update2.id);

//const productsV3Update = [...productsV3];
//productsV3Update[productIndexV3] = {
//    ...productsV3[productIndexV3],
//    ...update2.changes,
//};
//
//console.log('original', productsV3);
//console.log('update2', productsV3Update);

//let productsV4 = productsV3.flat()
//const productsIndexV3 = productsV4.findIndex(item => item.id === update2.id) 
//productsV4[productsIndexV3] = {
//    ...productsV4[productsIndexV3],
//    ...update2.changes,
//}

//console.log('original', productsV3);
//console.log('Update', productsV4);

const productV5 = productsV3.map(item => {
    if (item.id === update2.id) {
      return {
        ...item,
        ...update2.changes,
      }
    }
    return {...item};
});

console.log('original', productsV3);
console.log('update', productV5);

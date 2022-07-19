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
const numbers = [ 1, 30, 25 , 38, 45];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 70) {
        rta = element;
        break;
    }
};

console.log('for', rta);

const rta2 = numbers.find(item => item === 30);

console.log('find', rta2);


//
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '343',
    },
    {
        name: "Burger",
        price: 23,
        id: '444',
    },
    {
        name: "HotDog",
        price: 17,
        id: '555',
    },
    {
        name: "PanCakes",
        price: 33,
        id: '787',
    },
];

const rta3 = products.find(item => item.id === '787');

console.log('find', rta3);

const rta4 = products.findIndex(item => item.id === '787');

console.log('findIndex', rta4);
const orders = [
    {
        costumerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        costumerName: 'Camilo',
        total: 300,
        delivered: false,
    },
    {
        costumerName: 'Pablo',
        total: 120,
        delivered: true,
    },
    {
        costumerName: 'Tamy',
        total: 500,
        delivered: true,
    },
];

console.log('original', orders);
const rta = orders.map(item => item.total);
console.log('rta', rta);


//const rta2 = orders.map(item => {
//    item.tax = .19;
//    return item;
//});

//console.log('rta2',rta)
//console.log('original', orders);


const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});

console.log('rta3',rta3)
console.log('original', orders);
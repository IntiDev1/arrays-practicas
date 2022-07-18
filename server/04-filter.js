const words = ['moon', 'fire', 'tech', 'robocup'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);


const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);
console.log('original', words);


//
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
    {
        costumerName: 'Tamarindo',
        total: 400,
        delivered: false,
    },
];

const rta3 = orders.filter(item => item.delivered);
console.log('rta3', rta3);

const rta4 = orders.filter(item => item.delivered && item.total >= 100);
console.log('rta4', rta4);

const search = (query) => {
    return orders.filter(item => {
        return item.costumerName.includes(query);

    });
}

console.log(search('a'));
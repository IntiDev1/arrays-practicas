const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
};

console.log('for', newArray);

//
const matriz2 = [
    [1,2,3],
    [4,5,6, [11,22, [12,21]]],   //reto usar recurcividad.(entrv d trabjs)
    [7,8,9]
];


const rta = matriz2.flat(3);

console.log('flat', rta);

//
const matriz3 = [
    [1,2,3],
    [4,5,6, [1,2, [11,22]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray2 = profundidad(matriz3);

console.log(newArray2);

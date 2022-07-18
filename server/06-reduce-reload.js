const items = [1, 3, 2, 3, 1, 3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);


//
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "July",
        level: "medium",
    },
    {
        name: "Pedro",
        level: "hight",
    },
    {
        name: "Camilo",
        level: "medium",
    },
    {
        name: "Maya",
        level: "hight",
    },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);


//
const list = [];

for (let index = 0; index < 30; index++) {
    list.push(Math.floor(Math.random) * 11);
}

const rst = list.reduce((object, value) => {
    if (value < 5) object["1-4"] += 1;
    else if (value < 9) object["5-8"] += 1;
    else object["9-10"] += 1;

    return object
}, {
    "1-4": 0,
    "5-8": 0,
    "9-10": 0,
});

console.log(rst);
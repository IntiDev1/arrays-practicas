const numbers = [1, 2, 3, 4];

let rta = false
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}

console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0);
console.log("rta2", rta2);


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

const rta3 = orders.some(item => item.delivered);
console.log("rta3", rta3);

//
const dates2 = [
    {
        starDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        titke: "Cita de trabajo",
    },
    {
        starDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 15, 30),
        titke: "Cita con mi jefe",
    },
    {
        starDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        titke: "Cena",
    },
];

const newAppointment = {
    starDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1 , 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates2.some(date => {
        return areIntervalsOverlapping(
            {start: date.starDate, end: date.endDate},
            {start: newDate.starDate, end: newDate.endDate},
        )
    })
};

console.log('isOverlap', isOverlap(newAppointment));


//
function solution(numbers) {
	return numbers.some(num => num % 2 === 0);
 	// Tu código aquí 👈 
};

console.log(solution([1, 3, 5, 7, 10, 11]));
console .log(solution([1, 3, 5]));
const user = [
    { userId: 1, userName: "Tom", attributes: ["Nice", "cute"]},
    { userId: 1, userName: "Nico", attributes: ["lovely"] },
    { userId: 1, userName: "Mike", attributes: ["cool", "cute"]},
];

const rta = user.map(user => user.attributes).flat();
console.log('map-flat', rta);

const rta2 = user.flatMap(user => user.attributes);
console.log('rta2', rta2);


//
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

const rta3 = Object.keys(calendars);
console.log('rta3', rta3);

const rta4 = Object.values(calendars);
console.log('rta4', rta4);

const rta5 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log('rta5', rta5);


//
function solution(lines) {
	const rta = lines.map(item => item.split(' ')).flat().length
	return rta;
 	// Tu código aquí 👈
};

function solution(lines) {
    return lines.flatMap(item => item.split(' ').length).reduce((sum, item) => sum += item, 0);
};

console.log(solution([
	"Beautiful is better than ugly",
	"Explicit is better than implicit",
	"Simple is better than complex",
	"Complex is better than complicated",
]));
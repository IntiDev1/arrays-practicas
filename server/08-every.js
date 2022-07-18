const numbers = [15, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
    }
}

console.log('for', rta);

const rta2 = numbers.every(item => item <= 50);

console.log('rta2', rta2);

//
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Faby",
        age: 14,
    },
    {
        name: "Pedro",
        age: 16,
    },
    {
        name: "Dany",
        age: 13,
    },
];

const test = team.every(age => age <= 15);

console.log(test);

//
function solution(numbers) {
	return numbers.every(number => number % 2 === 0);
 	// Tu código aquí 👈
};

console.log(solution([2, 4, 6, 8, 10]));
console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));
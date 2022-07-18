const elements = ["fire", "air", "water"];

let rtaFinal = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
};

console.log('for', rtaFinal);

const rta = elements.join('--');

console.log('join', rta);

//
const title = "Curso de manipulacion de array";

const titleArray = title.split(' ').join('-').toLowerCase();

console.log(titleArray);

//
function solution(title) {
	return title.split(' ').join('-').toLowerCase();
 	// Tu código aquí 👈
};

console.log(solution("La forma de correr Puthon"));
console.log(solution("La API para nunca parar de aprender"));
console.log(solution("Curso de array"));
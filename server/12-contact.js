const elements = [1,3,5,7,9];
const otherElements = [2,4,6,8,0];

const newArray = [...elements];   //(...)'borra la referencia en memoria'
for (let index = 0; index < otherElements.length; index++) {
    const elements = otherElements[index];
    newArray.push(elements);
}

console.log('for', newArray);

const rta = elements.concat(otherElements);

console.log('concat', rta);

const rta2 = [...elements, ...otherElements];

console.log('...', rta2);

const rta3 = [...elements, 'random'];

console.log('rta3', rta3);

const rta4 = [...elements, ...'random'];

console.log('rta3', rta4);

elements.push(otherElements);

console.log('elements', elements);

elements.push(...otherElements);

console.log('elements2', elements);
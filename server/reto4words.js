

function solution(array) {
    return array.filter(word => word.length >= 4)
};

console.log(solution(['amor', 'sol', 'piedra', 'dia']));

solution([1,1,1]);
solution([2,4,8]);

function solution(numbers) {
    return numbers.reduce((sum, elements) => sum + elements, 0);
};

console.log(numbers);
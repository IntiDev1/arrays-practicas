const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);
const words = ["réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana"];
words.sort((a, b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: (2022, 3, 15, 12),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: (2022, 6, 25, 9),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: (2022, 1, 25, 7),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: (2022, 9, 3, 5),
    },
];
//orders.sort((a, b) => a.total - b.total);
//console.log(orders);

orders.sort((a, b) => b.date - a.date);
console.log(orders);
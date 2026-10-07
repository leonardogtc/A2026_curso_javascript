function rand([min = 0, max = 1000] = []) {
    if (min > max) [min, max] = [max, min];
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

console.log(rand([50, 20]));
console.log(rand([20, 100]));
console.log(rand());
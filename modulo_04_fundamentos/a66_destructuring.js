function rand(min, max) {
    min = min || 1;
    max = max || 1000;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obj = {
    min: 1,
    max: 100
};

function rand({ min = 1, max = 100 } = {}) {
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

console.log(rand());
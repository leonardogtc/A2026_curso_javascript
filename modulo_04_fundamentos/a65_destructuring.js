const [a, b] = [1, 2]
console.log(a, b)

const [n1, , n3, , n5] = [10, 20, 30, 40, 50]
console.log(n1, n3, n5)

const [, , , ...resto] = [1, 2, 3, 4, 5]
console.log(resto)


function rand([min = 0, max = 1]) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 100]))
console.log(rand([, 10]))
console.log(rand())


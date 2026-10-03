function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(10, 20)
imprimeSoma(10)
imprimeSoma(10, 20, 30, 40)

function soma(a, b=1) {
    console.log(a + b)
}

soma(10)
console.log(soma(10))
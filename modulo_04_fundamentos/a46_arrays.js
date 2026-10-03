const valores = [2.3, 4.7, 7.7, 9.8]
console.log(valores[0], valores[3])
console.log(valores[5])

valores[4] = 10.1
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(typeof valores)
console.log(valores)

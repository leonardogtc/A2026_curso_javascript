const escola = "Leonardo"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(typeof escola.charAt(5))
console.log(escola.charCodeAt(0))
console.log(escola.indexOf(3))
console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log('Escola: '.concat(escola).concat("!"))
console.log("2" + 3)
console.log(escola.replace('L', 'x'))
console.log("Cod3r".replace(/\d/, 'e')) // "Coder" (\d busca qualquer dígito)
console.log("Elite".replace(/\w/g, 'e')) // "eeeee"
console.log("Leonardo, Ivonete, Lúcia, Oliver".split(','))
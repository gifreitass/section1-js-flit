// DESAFIO 1

var lista = [12, 6, 9, 42, 11, 102, 44, 15]
var soma = 0

for (let i = 0; i < lista.length; i++) {
    soma += lista[i]
}

console.log(soma)

var soma = 0
var i = 0;
while (i < lista.length) {
    soma += lista[i]
    i++
}

console.log(soma)

var soma = 0
var i = 0
do {
    soma += lista[i]
    i++
} while (i < lista.length)

console.log(soma)

// DESAFIO 2.1 (PRIMOS)

var numInicial = 62
var numFinal = 70

for (numInicial; numInicial < numFinal; numInicial++) {
    if(numInicial % 2 === 0 || numInicial % 3 === 0 || numInicial % 5 === 0) {
    } else {
        break
    }
    console.log(numInicial)
}

// DESAFIO 2.2

for (var i = 0; i < 100; i++) {
    if (i > 39 && i < 51){
        continue;
    }
    console.log(i)
}

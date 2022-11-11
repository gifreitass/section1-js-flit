var caminhada = true
var corrida = true

if (caminhada === 5 && corrida === 2) {
    console.log('Passo o dia bem')
} else{
    console.log('Não passo o dia bem')
}

var levantar = true
var cedo = true

if (levantar === cedo || levantar < 8){
    console.log('Saio tranquilo')
}

var terminarTrabalho = false
var terCompromisso = false

if (!terminarTrabalho === true || !terCompromisso === true){
    console.log('Saio tarde')
}

// DESAFIO PRIMOS

var num = 7

num % 2 === 0 && num % 3 === 0 && num % 5 === 0 ? console.log('O número não é primo') : console.log('O número é primo')

// DESAFIO TERNÁRIO

var hora = 1
var minutos = 0

hora > 0 ? console.log(minutos = hora*60) : console.log(minutos = 60)



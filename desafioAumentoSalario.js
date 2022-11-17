function aumentoSalario(valorBase) {
    let aumento = 0
    valorBase <= 1500 ? aumento = valorBase * 0.2 :
        valorBase > 1500 && valorBase <= 2000 ? aumento = valorBase * 0.15 :
            valorBase > 2000 && valorBase <= 3000 ? aumento = valorBase * 0.1 :
                valorBase > 3000 ? aumento = valorBase * 0.05 : aumento = 0
    const salarioTotal = valorBase + aumento
    return salarioTotal
}

try {
    const salarioBase = parseInt(prompt('Qual é a média do seu salário?'))
    const salarioFinal = aumentoSalario(salarioBase)
    if (isNaN(salarioFinal)) {
        throw new Error("Você não digitou um número")
    } else {
        console.log(salarioFinal)
    }
} catch (error) {
    console.log(error.message)
}
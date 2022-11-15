//  

function login(name, password) {
    console.log(name);
    console.log(password);
}

let nome = prompt('Qual é seu nome?')
let senha = prompt('Crie a sua senha:')

login(nome, senha)

function compareLogin(name, password) {
    let compareName = prompt('Repita o seu nome')
    let compareSenha = prompt('Repita a sua senha:')
    if (compareName === name && compareSenha === password){
        console.log(true)
        return true
    } else{
        console.log(false)
        return false
    }
}

compareLogin(nome, senha)

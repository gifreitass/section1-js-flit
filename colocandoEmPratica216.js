// ESCOPO

function confirmarDados(nome){
    var nomeCompleto = nome + ' da Silva';
    var idade = 20;
    function getAnoNascimento(){
        var ano = 2022 - idade;
        return ano
    }

    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', getAnoNascimento());
    console.log('idade:', idade);
}

confirmarDados('Marcos');

// VAR, LET E CONST 

function confirmarDados(nome){
    const nomeCompleto = nome + ' da Silva';
    let geracao = 'millenium';
    function getAnoNascimento(){
        let idade = 40;
        let ano = 2022 - idade;
        return ano
    }
    const anoDeNascimento = getAnoNascimento();
    if(anoDeNascimento <= 1995){
        geracao = 'geração X';
    }
    console.log('nome completo:', nomeCompleto);
    console.log('ano de nascimento:', anoDeNascimento);
    console.log('geração:', geracao);
}
confirmarDados('Marcos')

// TRY...CATCH

try {
    function confirmarDados(nome) {
        var nomeCompleto = nome + ' da Silva';
        function getAnoNascimento() {
            var idade = 20;
            var ano = 2022 - idade;
            return ano
        }
        console.log('nome completo:', nomeCompleto);
        console.log('ano de nascimento:', getAnoNascimento());
        console.log('idade:', idade);
    }
    throw 'erro'
} catch(error){
    console.log('Um erro foi encontrado e não foi possível concluir a operação')
}

confirmarDados('Marcos');

// FUNÇÕES

function confirmarDados(nome, idade){
    var nomeCompleto = nome + ' da Silva';
    function getAnoNascimento(){
        var ano = 2022 - idade;
        return ano;
    }
    var anoDeNascimento = getAnoNascimento();
    function geracaoPertence(geracao){
        return geracao
    }
    if(anoDeNascimento <= 1995){
        var geracao = geracaoPertence('X')
    } else {
        var geracao = geracaoPertence('millenium')
    }
    console.log('nome completo:', nomeCompleto)
    console.log('ano de nascimento:', anoDeNascimento)
    console.log('geração:', geracao)
}
confirmarDados('Marcos', 40);
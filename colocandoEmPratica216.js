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
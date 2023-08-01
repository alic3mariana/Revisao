const pessoa = [
    Nome = 'Mariana',
    Idade = 16,
    Sexo = 'Feminino',
    Endereço = 'Rua José Franco, N°144, Angatuba-SP'
];

const botao = document.querySelector('#Exibir');
botao.addEventListener('click', function (){
    for(const pessoaO of pessoa) {
        const result = document.querySelector('#result');
        result.innerHTML += `<p> ${pessoaO} </p>`;
    }
});
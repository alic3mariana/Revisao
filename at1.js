const produto = {
    Item : 'Moto G30',
    Marca : 'Motorola',
    Preço : 1999.99,
    Descrição : 'Motorla G30, 128gb, 64MP',
    Categoria :'Smartphone'

};

const botao = document.querySelector('#Exibir');
botao.addEventListener('click', function (){
    console.log("olá")
    const result = document.createElement('div');
    result.innerHTML = "";
  console.log(result);
    for(const propriedade in produto) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = `${propriedade}: ${produto[propriedade]}`;
        result.appendChild(paragrafo);
    }

    document.body.appendChild(result);
})
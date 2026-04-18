/*const moedas = [
    { codigo: 'BRL', nome: 'Real' },
    { codigo: 'USD', nome: 'Dólar' }
]*/

const moedas = await [fetch('moedas.json')]

async function configurarSelects() {
    const origem = document.getElementById("origem")
    const destino = document.getElementById("destino")

    const optionsHTML = moedas.map(m => `<option value="${m.codigo}">"${m.nome}"</option>`).join('\n');

    console.log(optionsHTML)
    
    origem.innerHTML = optionsHTML;
    destino.innerHTML = optionsHTML;

    origem.value=moedas.at(0).codigo
    destino.value=moedas.at(1).codigo
    
}
configurarSelects();
console.log(moedas.at(0))
    

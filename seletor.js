const moedas = [
    { codigo: 'BRL', nome: 'Real' },
    { codigo: 'USD', nome: 'Dólar' }
]

function configurarSelects() {
    const origem = document.getElementById("origem")
    const destino = document.getElementById("destino")

    const optionsHTML = moedas.map(m => `<option value=${m.codigo}>${m.nome}</option>`).join('\n');
    
    origem.innerHTML = optionsHTML;
    destino.innerHTML = optionsHTML;

    origem.value=moedas.at(0).codigo
    origem.value=moedas.at(1).codigo
}
configurarSelects();

    

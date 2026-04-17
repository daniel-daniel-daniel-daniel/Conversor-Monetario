class moedaConverter {
    static paraBRL(valorInput) {
        return new Intl.NumberFormat('pt_BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorInput)}
    
    static paraUSD(valorInput) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorInput)}


}



function moedaCalcular() {

const dados = {
    valor: Number(document.getElementById("valorEntrada").value),
    taxaCambio: 0
}

const moedaSelecionada = document.getElementById("moeda-select").value
let formatar = ""

//1 USD = 4,990 BRL
//1 BRL = 0,20 USD
switch(moedaSelecionada){
    case "BRL":
        dados.taxaCambio = 0.20
        formatar=moedaConverter.paraBRL(dados.valor*4.99)
        break;
    case "USD":
        dados.taxaCambio = 4.990
        formatar=moedaConverter.paraUSD(dados.valor*0.20)
        break;
}

//const converter = dados.valor * dados.taxaCambio




document.getElementById("resultadoFinal").innerText = formatar
}
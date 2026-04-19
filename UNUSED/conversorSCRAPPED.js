let formatar = ""
let converterPara= ""


class moedaConverter {
    static paraBRL(valorInput) {
        return new Intl.NumberFormat('pt-BR', {
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

const moedaSelecionada = document.getElementById("origem").value

switch(moedaSelecionada){
    case "BRL":
        dados.taxaCambio = 0.20
        formatar=moedaConverter.paraBRL(dados.valor*4.99)
        break;
    case "USD":
        dados.taxaCambio = 4.99
        formatar=moedaConverter.paraUSD(dados.valor*0.20)
        break;
    case "EUR":
        dados.taxaCambio = 5.86
        formatar=moedaConverter.paraEUR(dados.valor*5.86)
        break;
}

//const converter = dados.valor * dados.taxaCambio




const mensagemResultado = `Conversão: ${formatar}`

document.getElementById("resultadoFinal").innerText = mensagemResultado
}
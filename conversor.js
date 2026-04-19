import { COMPONENTES_HTML, MOEDAS } from "./config.js";

export async class MoedaCalcular{
    constructor() {
        this.moedas = [];
    }
    async init() {
        this.moedas = await MOEDAS();
    }

    moedaCalculoFormula(valor, taxaOrigem, taxaDestino){
    return (valor * taxaOrigem / taxaDestino)
    }

    moedaConversor() {
    origem = this.moedas.find(m => m.codigo === COMPONENTES_HTML.seletor1.value);
    destino = this.moedas.find(m => m.codigo === COMPONENTES_HTML.seletor2.value);
    
    const valorInput = parseFloat(COMPONENTES_HTML.textInput.value);
    
    resultadoCalculado = moedaCalculoFormula(
        parseFloat(COMPONENTES_HTML.textInput.value),
        this.origem.taxaCambio, 
        this.destino.taxaCambio.toFixed(2));

    COMPONENTES_HTML.resultado.innerText = resultadoCalculado.toLocaleString(m => (m.codigo === COMPONENTES_HTML.seletor2.value), { style: 'currency', currency: this.destino.codigo });
    }
}
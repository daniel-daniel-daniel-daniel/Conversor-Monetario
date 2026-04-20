import { COMPONENTES_HTML, MOEDAS } from "./config.js";

export class MoedaCalcular{
    constructor() {
        this.moedas = [];
    }

    async init() {
        if (this.moedas.length === 0) {
        this.moedas = await MOEDAS();
        }
    }

    moedaCalculoFormula(valor, taxaOrigem, taxaDestino){
    return (valor / taxaOrigem) * taxaDestino;
    }

    moedaConversor() {
    const origem = this.moedas.find(m => m.codigo === COMPONENTES_HTML.seletor1.value);
    const destino = this.moedas.find(m => m.codigo === COMPONENTES_HTML.seletor2.value);
    const valorInput = parseFloat(COMPONENTES_HTML.textInput.value);
    
    if (isNaN(valorInput) || valorInput <= 0) return;
    
    const resultadoCalculado = 
        this.moedaCalculoFormula(
        valorInput,
        origem.taxaCambio, 
        destino.taxaCambio
    );

    COMPONENTES_HTML.resultado.innerText = resultadoCalculado.toLocaleString(destino.locale, 
    { 
        style: 'currency', 
        currency: destino.codigo
        });
    }
}

export const calculadora = new MoedaCalcular();
import { COMPONENTES_HTML, MOEDAS } from "./config.js";
import { MoedaCalcular } from "./conversor.js";

calculadora = new MoedaCalcular()

export class Seletor {
    constructor() {
        this.configurarSelects();
    }

    validarSelecao(event, moedas) {
        const valorOrigem = COMPONENTES_HTML.seletor1.value;
        const textInputLabel = document.getElementById("label-textINPUT");

        if (textInputLabel) {
            const moedaObj = moedas.find(m => m.codigo === valorOrigem);
            
            //placeholder sla kkk
            textInputLabel.innerHTML = `<img src="./assets/${moedaObj.codigo}.png"
            style="width: 20px; height: 20px; object-fit: cover; vertical-align: middle; border-radius: 3px; border: 1px solid #ccc;">`;
        }
        //deixa a opção selecionada no select2 como disabled: o user nn consegue clicar nela🐟
        Array.from(COMPONENTES_HTML.seletor2.options).forEach(htmlOption => {
            htmlOption.disabled = (htmlOption.value === valorOrigem);
        });
        //
        
        

    const ifTextEmptyVerify = (e) => {
            if (!COMPONENTES_HTML.textInput.value || isNaN) {
            
            calculadora.moedaConversor();
            
            COMPONENTES_HTML.resultado.style.display = "none";
        } else {
            this.validarSelecao(e, moedas);
            
            calculadora.moedaConversor();
            
            COMPONENTES_HTML.resultado.style.display = "block";
        }
    
    
    };
}

    async configurarSelects() {
        const moedas = await MOEDAS();
        const optionsHTML = moedas.map(m => `<option value=${m.codigo}>${m.nome}</option>`).join('\n');
    
        COMPONENTES_HTML.seletor1.innerHTML = optionsHTML;
        COMPONENTES_HTML.seletor2.innerHTML = optionsHTML;

        COMPONENTES_HTML.seletor1.value = "BRL";
        COMPONENTES_HTML.seletor2.value = "USD";
        
        this.validarSelecao({target: COMPONENTES_HTML.seletor1 }, moedas);

        COMPONENTES_HTML.seletor1.addEventListener("change", (e) => {
            this.validarSelecao(e, moedas);
            if (COMPONENTES_HTML.textInput.value){
                calculadora.moedaConversor();
            }
        });
        
        COMPONENTES_HTML.seletor2.addEventListener("change", (e) => {
            this.validarSelecao(e, moedas);
            if (COMPONENTES_HTML.textInput.value){
                calculadora.moedaConversor();
            }
            
        });
        
    }
}
new Seletor();


    

import { COMPONENTES_HTML, MOEDAS } from "./config.js";
import { calculadora } from "./conversor.js";

export class Seletor {
    constructor() {
        this.configurarSelects();

    }

    async validarSelecao(event, moedas) {
        const valorOrigem = COMPONENTES_HTML.seletor1.value;
        const valorDestino = COMPONENTES_HTML.seletor2.value;
        const valorInput = COMPONENTES_HTML.textInput.value;

         //👇👇👇BLOQUEIA OPÇÃO JÁ SELECIONADA NOS SELETORES
        const seletor1Options = Array.from(COMPONENTES_HTML.seletor1.options); 
        const seletor2Options = Array.from(COMPONENTES_HTML.seletor2.options); 
        const outraOption = moedas.find(moeda => moeda.codigo !== valorDestino)

        for (let opt of COMPONENTES_HTML.seletor1.options) {
            if (opt.value === valorDestino) {
                opt.hidden = true;
               // COMPONENTES_HTML.seletor1.appendChild(opt);
            } else {
                opt.hidden = false;
            }
        };
        for (let opt of COMPONENTES_HTML.seletor2.options) {
            if (opt.value === valorOrigem) {
                opt.hidden = true;
              //  COMPONENTES_HTML.seletor2.appendChild(opt);
            } else {
                opt.hidden = false;
            }
        };
        //CHECA SE AMBOS SELETORES TÊM O MESMO VALOR > SUBSTITUI UM DELES CASO TRUE///////////
        if(valorOrigem === valorDestino) {
            COMPONENTES_HTML.seletor1.value = outraOption.codigo
            COMPONENTES_HTML.seletor2.value = outraOption.codigo
            //this.validarSelecao(event, moedas);
        };

        //ADIÇÃO DE IMAGEM NO LABEL DO INPUT, DE ACORDO COM A MOEDA SELECIONADA 👇👇👇
        const textInputLabel = document.getElementById("label-textINPUT");
        if (textInputLabel) {
            const moedaObj = moedas.find(m => m.codigo === valorOrigem);
            //placeholder sla kkk
            textInputLabel.innerHTML = `<img src="./assets/${moedaObj.codigo}.png"
            style="width: 20px; height: 20px; object-fit: cover; vertical-align: middle; border-radius: 3px; border: 1px solid #ccc;">`;
        };
        //////////////////////////////////////////////////////////////////////////////////////
        //VERIFICAÇÃO - CAMPO DE TEXTO VAZIO? SE SIM IGNORAR TUDO ABAIXO👇👇👇
        if (!valorInput || valorInput <= 0) {
            COMPONENTES_HTML.resultado.style.display = "none";
            COMPONENTES_HTML.resultado.innerText = "";
            return;
        };
        
};

    async inverterMoedas() {
        const moedas = await MOEDAS();
            [COMPONENTES_HTML.seletor1.value, COMPONENTES_HTML.seletor2.value] = [COMPONENTES_HTML.seletor2.value, COMPONENTES_HTML.seletor1.value]
            this.validarSelecao(event, moedas);
            calculadora.moedaConversor();
        };

    async configurarSelects() {
        await calculadora.init();
        const moedas = await MOEDAS();
        //GERAÇÃO DE SELETORES👇👇👇/////////////////////////////////////////////////
        const optionsHTML = moedas.map(m => `<option value=${m.codigo}>${m.nome}</option>`).join('\n');
    
        COMPONENTES_HTML.seletor1.innerHTML = optionsHTML;
        COMPONENTES_HTML.seletor2.innerHTML = optionsHTML;
        //valor padrão quando o user entra na página👇👇👇
        COMPONENTES_HTML.seletor1.value = "BRL";
        COMPONENTES_HTML.seletor2.value = "USD";
        ////////////////////////////////////////////////////////////////////////
            this.validarSelecao({target: COMPONENTES_HTML.seletor1 }, moedas);
        //EVENT LISTENERS 👇👇👇////////////////////////////////////////
        COMPONENTES_HTML.seletor1.addEventListener("change", (e) => {
            this.validarSelecao(e, moedas);
            calculadora.moedaConversor();
            });
        
        COMPONENTES_HTML.seletor2.addEventListener("change", (e) => {
            this.validarSelecao(e, moedas);
            calculadora.moedaConversor();
            });
        
        COMPONENTES_HTML.botaoSwap.addEventListener("click", (e) => {
            this.validarSelecao(e, moedas);
            calculadora.moedaConversor();
            this.inverterMoedas();
            })
            ///////////////////////////////////////////////////////
        };
    }

new Seletor();


    

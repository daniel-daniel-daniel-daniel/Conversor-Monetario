import { COMPONENTES_HTML, MOEDAS } from "./config.js";
import { MoedaCalcular } from "./conversor.js";
import { Seletor } from "./seletor.js";

//const moedaCalcular = new MoedaCalcular();

async function configurarEventoInput() {
    const moedas = await MOEDAS();

    const calculadora = new MoedaCalcular();
    await calculadora.init();

    COMPONENTES_HTML.textInput.addEventListener("input", () => {
        if(!COMPONENTES_HTML.textInput.value) {
         COMPONENTES_HTML.resultado.style.display = "none"
        } else {
            calculadora.moedaConversor();
            
            COMPONENTES_HTML.resultado.style.display = "block";
        }
    });
    /*COMPONENTES_HTML.textInput.addEventListener("input", () => {
    document.getElementById("label-textINPUT").innerHTML = `${COMPONENTES_HTML.seletor1.value}`
    });*/
}
configurarEventoInput();

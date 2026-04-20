import { COMPONENTES_HTML, MOEDAS } from "./config.js";
import { calculadora } from "./conversor.js";

async function configurarEventoInput() {
    await calculadora.init();

    COMPONENTES_HTML.textInput.addEventListener("input", () => {
        const valor = parseFloat(COMPONENTES_HTML.textInput.value);
        if (!valor) {
            COMPONENTES_HTML.resultado.style.display = "none";
            COMPONENTES_HTML.resultado.innerText = ""   
        } else if (valor <= 0){
            COMPONENTES_HTML.textInput.value = 0
        } else {
            calculadora.moedaConversor();
            COMPONENTES_HTML.resultado.style.display = "block";
        }   
    });
}
configurarEventoInput();


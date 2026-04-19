import { COMPONENTES_HTML, MOEDAS } from "./config.js";
import { moedaCalcular } from "./conversor.js";
import { Seletor } from "./seletor.js";



async function configurarEventoInput() {
    const moedas = await MOEDAS();

    COMPONENTES_HTML.textInput.addEventListener("input", () => {
        if(!COMPONENTES_HTML.textInput.value) {
         COMPONENTES_HTML.resultado.style.display = "none"
        } else {
            moedaCalcular(); 
            COMPONENTES_HTML.resultado.style.display = "block";
        }
    });
    /*COMPONENTES_HTML.textInput.addEventListener("input", () => {
    document.getElementById("label-textINPUT").innerHTML = `${COMPONENTES_HTML.seletor1.value}`
    });*/
}
configurarEventoInput();

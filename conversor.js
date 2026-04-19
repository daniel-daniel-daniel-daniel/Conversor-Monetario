import { COMPONENTES_HTML, MOEDAS } from "./config.js";

//a=valor(input)  b1=taxaCambioOrigem  b2=taxaCambioDestino
function moedaCalculoFormula(a, b1, b2){
    return (a*b1/b2)
}

export async function moedaCalcular(){
    //👇pega a lista de moedas do json e transforma em array de objetos (sim, fui EU quem disse isso😝😝)
    const moedas = await MOEDAS();
    
    let resultado = 0;
    
    switch(COMPONENTES_HTML.seletor1.value){
        case "BRL":
            switch(COMPONENTES_HTML.seletor2.value){
            case "USD":
                resultado = moedaCalculoFormula(COMPONENTES_HTML.textInput.value, moedas.find(m => m.codigo === "BRL").taxaCambio, moedas.find(m => m.codigo === "USD").taxaCambio)
                break;
            case "EUR":
                resultado = moedaCalculoFormula(COMPONENTES_HTML.textInput.value, moedas.find(m => m.codigo === "BRL").taxaCambio, moedas.find(m => m.codigo === "EUR").taxaCambio)
                break;
            }
        break;
    case "USD":
        switch(COMPONENTES_HTML.seletor2.value){
            case "BRL":
                resultado = moedaCalculoFormula(COMPONENTES_HTML.textInput.value, moedas.find(m => m.codigo === "USD").taxaCambio, moedas.find(m => m.codigo === "BRL").taxaCambio)
                break;
            case "EUR":
                resultado = moedaCalculoFormula(COMPONENTES_HTML.textInput.value, moedas.find(m => m.codigo === "USD").taxaCambio, moedas.find(m => m.codigo === "EUR").taxaCambio)
                break;
        }
        break;
    case "EUR":
        switch(COMPONENTES_HTML.seletor2.value){
            case "BRL":
                resultado = moedaCalculoFormula(COMPONENTES_HTML.textInput.value, moedas.find(m => m.codigo === "EUR").taxaCambio, moedas.find(m => m.codigo === "BRL").taxaCambio)
                break;
            case "USD":
                resultado = moedaCalculoFormula(COMPONENTES_HTML.textInput.value, moedas.find(m => m.codigo === "EUR").taxaCambio, moedas.find(m => m.codigo === "USD").taxaCambio)
                break;
        }
        break;
    }
    COMPONENTES_HTML.resultado.innerText = resultado.toLocaleString(moedas.find(m => m.codigo === COMPONENTES_HTML.seletor2.value), {style: 'currency', currency: COMPONENTES_HTML.seletor2.value})
}
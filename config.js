export const MOEDAS_JSON_PATH = "moedas.json"

export const COMPONENTES_HTML = {
    seletor1: document.getElementById("origem"),
    seletor2: document.getElementById("destino"),
    resultado: document.getElementById("resultadoFinal"),
    textInput: document.getElementById("valorEntrada"),
    botaoSwap: document.getElementById("button-SWAP")
};

export async function MOEDAS() {
    const moedasFetch = await fetch(MOEDAS_JSON_PATH);
    return await moedasFetch.json();
}



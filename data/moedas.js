export const MOEDAS_JSON_PATH = "data/moedas.json";

export async function MOEDAS() {
  const moedasFetch = await fetch(MOEDAS_JSON_PATH);
  return await moedasFetch.json();
}

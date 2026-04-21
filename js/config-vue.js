import { MOEDAS } from "../data/moedas.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      moedas: [],
      valOrig: "BRL",
      valDest: "USD",
      valInput: 0,
    };
  },
  async mounted() {
    this.moedas = await MOEDAS();
  },

  computed: {
    resultadoFinal() {
      const origem = this.moedas.find((m) => m.codigo === this.valOrig);
      const destino = this.moedas.find((m) => m.codigo === this.valDest);
      const valor = this.valInput;

      if (!origem || !destino || valor <= 0) return "0,00";

      const calculo = (valor / origem.taxaCambio) * destino.taxaCambio;

      return calculo.toLocaleString(destino.locale, {
        style: 'currency',
        currency: destino.codigo,
      });
    },
  },
  methods: {
    inverterMoedas(){
      [this.valOrig, this.valDest] = [this.valDest, this.valOrig]
    }
  }
}).mount("#app");

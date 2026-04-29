import { MOEDAS } from "../data/moedas.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      moedas: [],
      valOrig: "BRL",
      valDest: "USD",
      valInput: "",
      dropdownOpen: {
        origem: false,
        destino: false,
      },
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

      if (!origem || !destino || valor <= 0) return "";

      const calculo = (valor / origem.taxaCambio) * destino.taxaCambio;

      return calculo.toLocaleString(destino.locale, {
        style: "currency",
        currency: destino.codigo,
      });
    },

    maisValor() {
      if (this.moedas.length === 0) return null;
      const menor = this.moedas.reduce((acc, cur) => {
        if (cur.taxaCambio < acc.taxaCambio) return cur;
        else return acc;
      });
      return `Moeda mais valorizada: <strong>${menor.nome}</strong> <br> Ela tem como sua taxa de câmbio ${menor.taxaCambio.toLocaleString(menor.locale, { style: "currency", currency: menor.codigo })} em relação ao Real.`;
    },

    menosValor() {
      if (this.moedas.length === 0) return null;
      const maior = this.moedas.reduce((acc, cur) => {
        if (cur.taxaCambio > acc.taxaCambio) return cur;
        else return acc;
      });
      return `Moeda menos valorizada: <strong>${maior.nome}</strong> <br> Ela tem como sua taxa de câmbio ${maior.taxaCambio.toLocaleString(maior.locale, { style: "currency", currency: maior.codigo })} em relação ao Real.`;
    },
  },
  methods: {
    inverterMoedas() {
      [this.valOrig, this.valDest] = [this.valDest, this.valOrig];
    },
    validarSelecao() {
      if (this.valOrig === this.valDest) {
        const outraOpcao = this.moedas.find((m) => m.codigo !== this.valDest);
        if (outraOpcao) this.valDest = outraOpcao.codigo;
      }
    },
    toggleDropdown(type) {
      // Fecha o outro dropdown se estiver aberto
      if (type === "origem") {
        this.dropdownOpen.destino = false;
      } else {
        this.dropdownOpen.origem = false;
      }
      this.dropdownOpen[type] = !this.dropdownOpen[type];
    },
    selectOption(codigo, type) {
      type === "origem" ? (this.valOrig = codigo) : (this.valDest = codigo);
      this.toggleDropdown(type); // Fecha o dropdown após a seleção
      this.validarSelecao(); // Revalida a seleção
    },
  },
}).mount("#app");

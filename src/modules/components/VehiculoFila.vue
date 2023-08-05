<template>
  <div class="container">
    <h2 >{{id}}</h2>
    <h2>{{placa}}</h2>
    <h2>{{marca}}</h2>
    <h2>{{modelo}}</h2>
    <h2>{{color}}</h2>
    <button>Visualizar</button>
  </div>
</template>

<script >
import { obtenerListadoFachada } from "../helpers/VehiculoCliente.js";
export default {
  data() {
    return {
      id: null,
      placa: null,
      marca: null,
      modelo: null,
      color: null,
    };
  },
  methods: {
    async consultarListaVehiculo() {
      const data = await obtenerListadoFachada();
      this.id = data.id;
      this.placa = data.placa;
      this.marca = data.marca;
      this.modelo = data.modelo;
      this.color = data.color;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
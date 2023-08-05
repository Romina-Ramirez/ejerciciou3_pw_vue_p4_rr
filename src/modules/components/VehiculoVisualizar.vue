<template>
  <div class="containerVista">
    <label for="">Id</label>
    <input v-model="id" type="text" />
    <label for="">Placa</label>
    <input v-model="placa" type="text" />
    <label for="">Marca</label>
    <input v-model="marca" type="text" />
    <label for="">Modelo</label>
    <input v-model="modelo" type="text" />
    <label for="">Color</label>
    <input v-model="color" type="text" />
  </div>
</template>

<script>
import { obtenerVehiculoFachada } from "../helpers/VehiculoCliente.js";

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
    async consultarVehiculo(numero) {
      const data = await obtenerVehiculoFachada(numero);
      this.id = data.id;
      this.placa = data.placa;
      this.marca = data.marca;
      this.modelo = data.modelo;
      this.color = data.color;
    },
  },
  mounted() {
    const { numero } = this.$route.params;
    this.consultarVehiculo(numero);
  },
};
</script>

<style scoped>
input {
  width: 200px;
}
.containerVista {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
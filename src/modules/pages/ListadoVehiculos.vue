<template>
  <div class="container">
    <h2>Id</h2>
    <h2>Placa</h2>
    <h2>Marca</h2>
    <h2>Modelo</h2>
    <h2>Color</h2>
    <h2>Acción</h2>
    <VehiculoFila />
  </div>
  <div class="containerInputs">
    <VehiculoVisualizar />
  </div>
</template>

<script>
import VehiculoFila from '../components/VehiculoFila.vue';
import VehiculoVisualizar from "../components/VehiculoVisualizar.vue";
export default {
  components: {
    VehiculoVisualizar,
    VehiculoFila
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  border: 1px solid black;
}

.containerInputs {
    display: flex;
    flex-direction: column;
}
</style>
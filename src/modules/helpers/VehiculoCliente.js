import axios from "axios"

export const obtenerListadoFachada = async () => {
    return await obtenerListadoAPI();
}

export const obtenerVehiculoFachada = async (numero) => {
    return await obtenerVehiculoAPI(numero);
}

const obtenerListadoAPI = async () => {
    const data = axios.get(`http://localhost:8081/API/V1.0/Inventario/vehiculos`).then(r => r.data);
    return data[0];
}

const obtenerVehiculoAPI = async (numero) => {
    const data = axios.get(`http://localhost:8081/API/V1.0/Inventario/vehiculos/${numero}`).then(r => r.data);
    return data;
}
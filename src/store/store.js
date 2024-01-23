import { createStore } from 'vuex';


export default createStore({
  state: {
    carrito: [],
  },
  mutations: {
    agregarAlCarrito(state, producto) {
      state.carrito.push(producto);
    },
    eliminarDelCarrito(state, index) {
      state.carrito.splice(index, 1);
    },
  },
});

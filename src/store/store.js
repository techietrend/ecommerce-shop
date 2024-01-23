import { createStore } from 'vuex';


export default createStore({
  state: {
    carrito: [],
    dialog: false,
  },
  mutations: {
    agregarAlCarrito(state, producto) {
      state.carrito.push(producto);
    },
    eliminarDelCarrito(state, index) {
      state.carrito.splice(index, 1);
    },
    vaciarCarrito(state) {
      state.carrito = [];
    },
    toggleCarritoDialog(state) {
      state.dialog = !state.dialog;
    },
  },
});

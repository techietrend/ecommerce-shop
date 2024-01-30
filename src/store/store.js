import { createStore } from 'vuex'

export default createStore({
   state: {
      carrito: [],
      dialog: false,
      subTotal: 0,
   },
   mutations: {
      agregarAlCarrito(state, producto) {
         const productoConCantidad = { ...producto, cantidad: 1 }
         state.carrito.push(productoConCantidad)
      },
      eliminarDelCarrito(state, index) {
         state.carrito.splice(index, 1)
      },
      vaciarCarrito(state) {
         state.carrito = []
      },
      toggleCarritoDialog(state) {
         state.dialog = !state.dialog
      },
      incrementarCantidadProducto(state, index) {
         state.carrito[index].cantidad++
      },
      quitarCantidadProducto(state, index) {
         if (state.carrito[index].cantidad > 1) {
            state.carrito[index].cantidad--
         } else {
            state.carrito.splice(index, 1)
         }
      },
   },
   getters: {
      totalSinEnvio: (state) => {
         const totalSinEnvio = state.carrito.reduce(
            (acc, product) =>
               acc +
               parseFloat(product.precio) * product.cantidad,
            0
         )
         state.subTotal = totalSinEnvio
         return totalSinEnvio.toFixed(2)
      },
   },
})

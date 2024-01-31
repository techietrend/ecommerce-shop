<template>
   <v-card>
      <div class="d-flex" style="background-color: #007185">
         <v-card-title class="text-white">
            Contenido del Carrito
         </v-card-title>
         <v-icon
            class="ml-auto mt-4 pr-5"
            color="white"
            @click="cerrarCarritoDialog"
         >
            mdi-close
         </v-icon>
      </div>
      <v-list>
         <v-list-item v-if="carrito.length > 0">
            <v-list-item
               v-for="(product, index) in carrito"
               :key="index"
            >
               <hr />
               <div
                  class="item-content justify-space-between flex-column flex-md-row"
               >
                  <div class="d-flex justify-space-between">
                     <v-img
                        :src="product.imagen[0]"
                        style="width: 100px; height: 100px"
                     />
                     <v-btn icon @click="quitarCantidad(index)">
                        <v-icon size="small" color="primary"
                           >mdi-minus</v-icon
                        >
                     </v-btn>
                     <v-divider></v-divider>
                     <v-btn
                        icon
                        @click="incrementarCantidad(index)"
                     >
                        <v-icon size="small" color="primary">
                           mdi-plus
                        </v-icon>
                     </v-btn>
                  </div>
                  <div
                     class="d-flex flex-column flex-md-row align-center"
                  >
                     <v-list-item-title
                        class="text-muted mb-2 mb-md-0 h2"
                     >
                        <strong>
                           Cantidad x
                           {{ product.cantidad }}
                        </strong>
                     </v-list-item-title>
                     <v-list-item-title class="ml-md-4">
                        {{ product.nombre }}
                     </v-list-item-title>
                     <v-list-item-title class="ml-md-4">
                        Usd {{ product.precio }}
                     </v-list-item-title>
                  </div>
                  <v-list-item-action>
                     <v-list-item-subtitle class="mb-2 mb-md-0">
                        Eliminar producto
                     </v-list-item-subtitle>
                     <span>&#160;&#160;</span>
                     <v-btn
                        icon
                        @click="removeFromCarrito(index)"
                     >
                        <v-icon size="small" color="red"
                           >mdi-delete</v-icon
                        >
                     </v-btn>
                  </v-list-item-action>
               </div>
            </v-list-item>
         </v-list-item>
         <v-list-item v-else>
            <v-list-item-subtitle>
               No hay productos en el carrito
            </v-list-item-subtitle>
         </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <div class="text-white" style="background-color: #232f3e">
         <v-card-actions class="justify-end">
            <v-btn text> Subtotal: Usd$ {{ subtotal }} </v-btn>
         </v-card-actions>

         <v-card-actions
            class="d-flex flex-column flex-md-row justify-lg-space-around"
         >
            <v-btn
               text
               color="white"
               class="w-auto bg-red mb-2 mb-md-0"
               @click="vaciarCarro"
               :disabled="carrito.length === 0"
            >
               Vaciar Carrito
            </v-btn>
            <v-btn
               text
               color="white"
               class="w-auto bg-success mb-2 mb-md-0"
               @click="cerrarCarritoDialog"
               :disabled="carrito.length === 0"
            >
               Agregar más productos
            </v-btn>
            <v-btn
               text
               color="white"
               class="w-auto bg-info mb-2 mb-md-0"
               :disabled="carrito.length === 0"
               @click="facturacion"
            >
               Continuar con la Compra
            </v-btn>
         </v-card-actions>
      </div>
   </v-card>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const carrito = computed(() => store.state.carrito)

const removeFromCarrito = (index) => {
   store.commit('eliminarDelCarrito', index)
}

const incrementarCantidad = (index) => {
   store.commit('incrementarCantidadProducto', index)
}

const quitarCantidad = (index) => {
   store.commit('quitarCantidadProducto', index)
}

const subtotal = computed(() => {
   return store.getters.totalSinEnvio
})

const vaciarCarro = () => {
   store.commit('vaciarCarrito')
}

const cerrarCarritoDialog = () => {
   store.commit('toggleCarritoDialog', false)
}

const facturacion = () => {
   router.push({
      name: 'Facturacion',
   })

   store.commit('toggleCarritoDialog', false)
}
</script>

<style scoped>
.item-content {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
</style>

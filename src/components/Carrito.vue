<template>
   <v-card>
      <div class="d-flex bg-dark">
         <v-card-title class="text-white">
            Contenido del Carrito
         </v-card-title>
         <v-icon
            class="ml-auto mt-4"
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
               <div class="item-content justify-space-between">
                  <div class="pl-5 d-flex">
                     <v-img
                        :src="product.imagen"
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
                  <div>
                     <v-list-item-title class="text-muted"
                        >Cantidad x
                        {{ product.cantidad }}
                     </v-list-item-title>
                  </div>
                  <div>
                     <v-list-item-title>
                        {{ product.nombre }}
                     </v-list-item-title>
                  </div>
                  <div>
                     <v-list-item-title>
                        Usd {{ product.precio }}
                     </v-list-item-title>
                  </div>
                  <v-list-item-action>
                     <v-list-item-subtitle>
                        Eliminar producto
                     </v-list-item-subtitle>
                     <span>&#160;&#160;</span>
                     <v-btn
                        icon
                        @click="removeFromCarrito(index)"
                     >
                        <v-icon size="small" color="red">
                           mdi-delete
                        </v-icon>
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
      <div class="bg-dark text-white">
         <v-card-actions class="justify-end">
            <v-btn text> 
               Subtotal: Usd$ {{ subtotal }} 
            </v-btn>
         </v-card-actions>

         <v-card-actions class="d-flex justify-lg-space-around">
            <v-btn
               text
               color="white"
               class="w-auto bg-red"
               @click="vaciarCarro"
               :disabled="carrito.length === 0"
            >
               Vaciar Carrito
            </v-btn>
            <v-btn
               text
               color="white"
               class="w-auto bg-success"
               @click="cerrarCarritoDialog"
               :disabled="carrito.length === 0"
            >
               Agregar mas productos
            </v-btn>
            <v-btn
               text
               color="white"
               class="w-auto bg-info"
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

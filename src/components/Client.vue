<template>
   <v-row
      style="
         background: linear-gradient(
            to bottom,
            #080a21,
            #000000
         );
      "
   >
      <v-col cols="12" sm="6" md="3">
         <v-card
            class="mx-auto my-12 pb-4 text-white"
            max-width="374"
            flat
            style="
               background: linear-gradient(
                  to bottom,
                  #080a21,
                  #000000
               );
            "
            elevation="10"
         >
            <v-img :src="avata" max-height="150px"> </v-img>
            <v-card-item>
               <v-card-title class="text-center">
                  Ofertas del dia
               </v-card-title>
            </v-card-item>

            <v-card-text>
               <div class="text-center">
                  <h1>{{ countdown }}</h1>
               </div>
            </v-card-text>
         </v-card>
      </v-col>

      <v-col
         cols="12"
         sm="6"
         md="3"
         v-for="(client, i) in clients"
         :key="i"
      >
         <v-card
            class="mx-auto my-12 p-2 rounded"
            max-width="324"
            elevation-10
         >
            <v-icon
               class="icono-vista"
               @click="mostrarDetalle(client)"
            >
               mdi-eye
            </v-icon>
            <v-img
               height="150"
               class="mx-4 img"
               :src="client.img"
               @click="mostrarDetalle(client)"
            >
            </v-img>

            <v-card-item class="mt-n4">
               <v-card-title class="text-center">
                  {{ client.title }}
               </v-card-title>
            </v-card-item>
            <v-card-text>
               <v-row
                  align="center"
                  class="mx-0 mt-2 d-flex justify-content-center"
               >
                  <v-card-text
                     class="d-flex justify-content-center"
                  >
                     <v-chip
                        color="primary"
                        dark
                        class="d-flex justify-content-center"
                     >
                        $USD {{ client.price }}
                     </v-chip>
                  </v-card-text>
                  <v-snackbar
                     :timeout="2000"
                     color="deep-purple-accent-4"
                     elevation="24"
                  >
                     <template v-slot:activator="{ props }">
                        <v-btn
                           :loading="client.loading"
                           class="w-100 bg-primary"
                           height="30"
                           variant="outlined"
                           v-bind="props"
                           @click="agregarAlCarrito(client)"
                        >
                           Añadir al carrito
                        </v-btn>
                     </template>

                     Se ha añadido con éxito un nuevo producto al
                     carrito
                  </v-snackbar>
                  <v-btn
                     class="flex-grow-1 mt-4 text-white w-100"
                     style="background-color: #232f3e"
                     height="48"
                     variant="outlined"
                  >
                     Comprar
                  </v-btn>
               </v-row>
            </v-card-text>
            <v-dialog v-model="dialogVisible">
               <DetailProduct :producto="productoSeleccionado" />
            </v-dialog>
         </v-card>
      </v-col>
   </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import avatar from '../assets/avatar.png'
import { useCountdown } from '@/utils/funciones.js'
import DetailProduct from '@/components/DetailProduct.vue'
const { countdown, calculateCountdown } = useCountdown()

const avata = avatar
const store = useStore()

onMounted(() => {
   calculateCountdown()
})

const dialogVisible = ref(false)
const productoSeleccionado = ref(null)

const mostrarDetalle = (producto) => {
   productoSeleccionado.value = { ...producto }
   dialogVisible.value = true
}

const clients = ref([
   {
      img: 'image/9.png',
      title: 'Appel Mac Book Pro',
      price: '93.358.01',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
   {
      img: 'image/10.png',
      title: 'Appel Mac Book Pro',
      price: '93.358.01',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
   {
      img: 'image/11.jpg',
      title: 'Appel Mac Book Pro',
      price: '93.358.01',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
])

const agregarAlCarrito = (producto) => {
   producto.loading = true

   setTimeout(() => {
      try {
         const productoParaCarrito = {
            nombre: producto.title,
            precio: producto.price,
            imagen: producto.img,
         }

         store.commit('agregarAlCarrito', productoParaCarrito)
      } finally {
         producto.loading = false
      }
   }, 1000)
}
</script>

<style scoped>
.img {
   cursor: pointer;
}

.icono-vista {
   position: absolute;
   top: 10px;
   right: 10px;
   cursor: pointer;
   z-index: 1;
}
.icono-vista:hover {
   color: #adeec7;
}
</style>

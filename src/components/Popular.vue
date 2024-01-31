<template>
   <v-row>
      <v-col
         v-for="(popular, i) in populars"
         :key="i"
         cols="12"
         sm="6"
         md="4"
         lg="3"
      >
         <v-card
            class="mx-auto my-12 pb-4 pt-4"
            max-width="374"
            elevation="10"
         >
            <v-icon
               class="icono-vista"
               @click="mostrarDetalle(popular)"
            >
               mdi-eye
            </v-icon>
            <v-img
               height="230"
               width="230"
               class="mx-auto img"
               :src="popular.img[0]"
            >
            </v-img>
            <v-card-item class="mt-n4">
               <v-card-title class="text-center">
                  {{ popular.title }}
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
                        $USD {{ popular.price }}
                     </v-chip>
                  </v-card-text>
                  <v-snackbar
                     :timeout="2000"
                     color="deep-purple-accent-4"
                     elevation="24"
                  >
                     <template v-slot:activator="{ props }">
                        <v-btn
                           :loading="popular.loading"
                           class="w-100 bg-primary"
                           height="30"
                           variant="outlined"
                           v-bind="props"
                           @click="agregarAlCarrito(popular)"
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
import { useStore } from 'vuex'
import { ref } from 'vue'
import DetailProduct from '@/components/DetailProduct.vue'

const store = useStore()

const dialogVisible = ref(store.state.dialogDetail)
const productoSeleccionado = ref(null)

const mostrarDetalle = (producto) => {
   productoSeleccionado.value = { ...producto }
   dialogVisible.value = !false;
}

const populars = ref([
   {
      img: [
         'popular/1.jpg',
         'popular/2.png',
         'popular/3.jpg',
         'popular/4.png',
      ],
      title: 'Wayxin R5',
      price: '99.8',
      bio: ' Intercomunicador R5 para cascos, auriculares con Radio FM. Asistente de voz inteligente, rápido doble clic en el botón del teléfono para iniciar el asistente de voz del teléfono (conectado al estado del teléfono), para lograr la interacción con el teléfono, IPX6 nivel impermeable, sin miedo a la lluvia, valiente para seguir adelante',
      loading: false,
   },
   {
      img: [
         'popular/1.jpg',
         'popular/2.png',
         'popular/3.jpg',
         'popular/4.png',
      ],
      title: 'Appel Mac Book Pro',
      price: '99.8',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
   {
      img: [
         'popular/3.jpg',
         'popular/4.png',
         'popular/1.jpg',
         'popular/2.png',
      ],
      title: 'Mini Microfono',
      price: '99.8',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
   {
      img: [
         'popular/4.png',
         'popular/1.jpg',
         'popular/3.jpg',
         'popular/4.png',
      ],
      title: 'Reloj',
      price: '99.8',
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

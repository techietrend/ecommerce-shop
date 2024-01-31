<template>
   <v-row>
      <v-col
         v-for="(feature, i) in featured"
         :key="i"
         cols="12"
         sm="6"
         md="4"
         lg="3"
      >
         <v-card
            class="mx-auto my-12 pb-4"
            max-width="374"
            elevation="10"
         >
            <v-icon
               class="icono-vista"
               @click="mostrarDetalle(feature)"
            >
               mdi-eye
            </v-icon>
            <v-img height="250" class="mx-4 img" :src="feature.img">
            </v-img>

            <v-card-item class="mt-n4">
               <v-card-title class="text-center">
                  {{ feature.title }}
               </v-card-title>
            </v-card-item>

            <v-card-text>
               <div class="text-center">
                  {{ feature.bio }}
               </div>
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
                  $USD {{ feature.price }}
               </v-chip>
                  </v-card-text>
                  <v-snackbar
                     :timeout="2000"
                     color="deep-purple-accent-4"
                     elevation="24"
                  >
                     <template v-slot:activator="{ props }">
                        <v-btn
                           :loading="feature.loading"
                           class="w-100 bg-primary"
                           height="30"
                           variant="outlined"
                           v-bind="props"
                           @click="agregarAlCarrito(feature)"
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

const dialogVisible = ref(false)
const productoSeleccionado = ref(null)

const mostrarDetalle = (producto) => {
   productoSeleccionado.value = { ...producto }
   dialogVisible.value = true
}
const featured = ref([
   {
      img: 'image/5.png',
      title: 'Appel Mac Book Pro',
      price: '93.358.01',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
   {
      img: 'image/6.png',
      title: 'Appel Mac Book Pro',
      price: '93.358.01',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
   {
      img: 'image/7.png',
      title: 'Appel Mac Book Pro',
      price: '93.358.01',
      bio: ' Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      loading: false,
   },
   {
      img: 'image/8.png',
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

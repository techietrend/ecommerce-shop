<template>
   <v-row>
      <v-card
         v-for="(novedad, index) in novedad"
         :key="index"
         class="mx-auto mt-10 mb-10 p-2"
         width="450"
         elevation="10"
         :color="novedad.color"
         @click="agregarAlCarrito(novedad)"
      >
         <v-row>
            <v-col cols="12" sm="6">
               <v-card-item class="mt-10">
                  <v-card-title class="text-center">
                     {{ novedad.title }}
                  </v-card-title>
               </v-card-item>
               <v-card-text>
                  <div class="text-center">
                     {{ novedad.description }}
                  </div>
                  <div class="text-center mt-4">
                     <v-card-text
                        class="d-flex justify-content-center"
                     >
                        <p class="font-weight-medium">
                           $USD {{ novedad.price }}
                        </p>
                     </v-card-text>
                     <v-btn
                        color="black"
                        class="w-100"
                        @click="agregarAlCarrito(novedad)"
                     >
                        Agregar
                     </v-btn>
                  </div>
               </v-card-text>
            </v-col>
            <v-col cols="12" sm="6">
               <v-img
                  height="210"
                  class="mx-4"
                  :src="novedad.image"
               >
               </v-img>
            </v-col>
         </v-row>
      </v-card>
   </v-row>
</template>

<script setup>
import image13 from '../../public/image/13.jpg'
import image14 from '../../public/image/14.jpg'
import image15 from '../../public/image/15.jpg'

import { useStore } from 'vuex'

const store = useStore()

const agregarAlCarrito = (novedad) => {
   store.commit('agregarAlCarrito', {
      nombre: novedad.title,
      precio: novedad.price,
      imagen: novedad.image,
   })
}

const novedad = [
   {
      title: 'Smart Watch 1',
      description: 'Small plates, salads & sandwiches',
      image: image13,
      price: '45.5',
      color: 'white',
   },
   {
      title: 'Smart Watch 2',
      description: 'Small plates, salads & sandwiches',
      image: image14,
      price: '45.5',
      color: 'red',
   },
   {
      title: 'Smart Watch 3',
      description: 'Small plates, salads & sandwiches',
      image: image15,
      price: '45.5',
      color: 'white',
   },
]
</script>

<style scoped>
</style>

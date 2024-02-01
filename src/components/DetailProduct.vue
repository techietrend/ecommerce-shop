<template>
   <v-card class="p-2">
      <v-row>
         <v-col cols="12" md="6">
            <Carousel
               id="gallery"
               :items-to-show="1"
               :wrap-around="false"
               v-model="currentSlide"
            >
               <Slide v-for="(image, a) in imagenes" :key="a">
                  <v-img
                     :src="image"
                     alt="Producto"
                     max-height="300"
                     class="carousel__item"
                  ></v-img>
               </Slide>
            </Carousel>

            <Carousel
               id="thumbnails"
               :items-to-show="4"
               :wrap-around="true"
               v-model="currentSlide"
               ref="carousel"
            >
               <Slide v-for="(image, i) in imagenes" :key="i">
                  <v-img
                     :src="image"
                     alt="Thumbnail"
                     class="carousel__item"
                     @click="slideTo(i - 1)"
                     max-height="100"
                  ></v-img>
               </Slide>
            </Carousel>
         </v-col>
         <v-col cols="12" md="6">
            <v-card
               class="d-flex flex-column bg-grey-lighten-5 mb-3 p-5 h-100"
            >
               <v-card-title>
                  Descripcion de {{ producto.title }}
               </v-card-title>
               <v-sheet>{{ producto.bio }}</v-sheet>
               <v-chip
                  color="primary"
                  dark
                  class="d-flex justify-content-center mt-15"
               >
                  $USD {{ producto.price }}
               </v-chip>
            </v-card>
         </v-col>
      </v-row>
   </v-card>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import { useStore } from 'vuex'

const store = useStore()

import 'vue3-carousel/dist/carousel.css'

const props = defineProps(['producto'])


const imagenes = ref(props.producto.img)
const currentSlide = ref(0)

const slideTo = (val) => {
   currentSlide.value = val
}
</script>

<style scoped>
.carousel__item{
   margin: 0px;
   padding: 0px;
   border: 1px solid #232f3e;
   border-radius: 10px;
}
</style>

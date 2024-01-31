<template>
   <Carousel
      :settings="carouselSettings"
      :breakpoints="breakpoints"
   >
      <Slide v-for="(item, index) in items" :key="index">
         <v-sheet class="carousel__item">
            <v-card
               class="card-hover p-1 bg-dark mt-5"
               height="130"
               width="130"
               elevation-10
            >
               <v-img
                  :src="item.img"
                  cover
                  height="200"
                  width="300"
                  class="bg-grey-lighten-2 img"
               ></v-img>
            </v-card>
            <v-card-title class="title text-white">
               {{ item.title }}
            </v-card-title>
         </v-sheet>
      </Slide>
      <template #addons>
         <Navigation class="text-white" />
      </template>
   </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'


import 'vue3-carousel/dist/carousel.css'

const items = ref([
   {
      img: 'popular/1.jpg',
      title: 'Tornillos',
      text: 'Texto 1',
   },
   {
      img: 'popular/1.jpg',
      title: 'Cables',
      text: 'Texto 2',
   },
   {
      img: 'popular/1.jpg',
      title: 'Productos',
      text: 'Texto 1',
   },
   {
      img: 'popular/1.jpg',
      title: 'Card 2',
      text: 'Texto 2',
   },
   {
      img: 'popular/1.jpg',
      title: 'Card 1',
      text: 'Texto 1',
   },
   {
      img: 'popular/1.jpg',
      title: 'Card 2',
      text: 'Texto 2',
   },
   {
      img: 'popular/1.jpg',
      title: 'Card 1',
      text: 'Texto 1',
   },
   {
      img: 'popular/1.jpg',
      title: 'Card 2',
      text: 'Texto 2',
   },
])

const carouselSettings = ref({
   itemsToShow: 1,
   snapAlign: 'center',
})

const breakpoints = {
   700: {
      itemsToShow: 3.5,
      snapAlign: 'center',
   },
   1024: {
      itemsToShow: 5,
      snapAlign: 'start',
   },
}
</script>

<style scoped>
.card-hover {
   border-radius: 50%;
}
.card-hover:hover {
   transform: scale(1.05);
   box-shadow: 0px 0px 15px rgba(0, 0, 0, 5.3);
   transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
   cursor: pointer;
}

.title {
   font-size: 15px;
}
.carousel__item {
   background-color: transparent;
}
.img {
   border-radius: 100%;
}
</style>

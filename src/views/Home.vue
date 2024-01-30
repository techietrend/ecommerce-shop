<template>
   <v-container fluid style="background-color: #e3e6e6">
      <v-row>
         <v-sheet class="w-100 bg-primary text-white">
            <v-toolbar class="bg-transparent">
               <v-toolbar-title>
                  Todo lo que necesites en robótica de
                  competencia
               </v-toolbar-title>
            </v-toolbar>
            <v-col cols="12" sm="12">
               <Section />
            </v-col>
         </v-sheet>
         <v-toolbar color="transparent">
            <v-toolbar-title>
               Productos Populares
            </v-toolbar-title>
         </v-toolbar>
         <v-col cols="12" sm="12" class="mt-n10">
            <Popular />
         </v-col>
         <v-toolbar color="transparent">
            <v-toolbar-title>
               Productos destacados
            </v-toolbar-title>
         </v-toolbar>
         <v-col cols="12" sm="12" class="mt-n10" id="destacados">
            <Featured />
         </v-col>
         <v-col cols="12" sm="12" class="mt-n10">
            <Client />
         </v-col>
         <v-toolbar color="transparent">
            <v-toolbar-title>Novedades</v-toolbar-title>
         </v-toolbar>
         <v-col cols="12" sm="12" class="mt-n10">
            <NovedadesVue />
         </v-col>
      </v-row>
      <v-col cols="12" sm="12">
         <v-carousel height="300">
            <v-carousel-item
               v-for="(item, i) in items"
               :key="i"
               :src="item.src"
               cover
            >
            </v-carousel-item>
         </v-carousel>
      </v-col>
   </v-container>
</template>

<script setup>
import Popular from '@/components/Popular.vue'
import Featured from '@/components/Featured.vue'
import Client from '@/components/Client.vue'
import NovedadesVue from '@/components/Novedades.vue'
import Section from '@/components/Section.vue'
import bannerImg from '../assets/banner.png'
const banner = bannerImg

const items = [
   {
      src: 'banner1.jpg',
      title: 'Surface Studio',
      text: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ',
   },
   {
      src: 'banner2.jpg',
      title: 'Surface Studio',
      text: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ',
   },
   {
      src: 'banner3.jpg',
      title: 'Surface Studio',
      text: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ',
   },
]
</script>

<style scoped></style>

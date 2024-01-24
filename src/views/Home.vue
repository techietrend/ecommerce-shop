<template>
  <v-app>
    <v-main style="background-color: whitesmoke;">
      <v-container>
        <h3>Todo lo que necesites en robótica de competencia</h3>
        <p class="text-muted">7 años de experiencia en robótica competitiva.</p>
        <v-row>
          <v-col cols="12" sm="12">
             <div class="w-100 bg-warning" elevation-10>
              <v-carousel>
                <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-col>
          <v-toolbar color="transparent">
            <v-toolbar-title>Popular Products</v-toolbar-title>
          </v-toolbar>
          <v-col cols="12" sm="12" class="mt-n10">
            <Popular />
          </v-col>
          <v-toolbar color="transparent" class="mt-n10">
            <v-toolbar-title>Featured Products</v-toolbar-title>
          </v-toolbar>
          <v-col cols="12" sm="12" class="mt-n10">
            <Featured />
          </v-col>
          <v-col cols="12" sm="12" class="mt-n10">
            <Client />
          </v-col>
          <v-toolbar color="transparent" class="mt-5">
            <v-toolbar-title>Novedades</v-toolbar-title>
          </v-toolbar>
          <v-col cols="12" sm="12" class="mt-n10">
            <NovedadesVue />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Popular from "@/components/Popular.vue";
import Featured from "@/components/Featured.vue";
import Client from "@/components/Client.vue";
import NovedadesVue from "@/components/Novedades.vue";
import router from "@/router";

const items = [
  {
    src: "banner1.jpg",
    title: "Surface Studio",
    text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
  },
  {
    src: "banner2.jpg",
    title: "Surface Studio",
    text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
  },
  {
    src: "banner3.jpg",
    title: "Surface Studio",
    text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
  },
]

</script>

<style scoped></style>

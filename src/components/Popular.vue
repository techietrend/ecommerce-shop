<template>
  <v-row>
    <v-col v-for="(popular, i) in populars" :key="i" cols="12" sm="6" md="4" lg="3">
      <v-card class="mx-auto my-12 pb-4" max-width="374" elevation="3">
        <v-img height="250" class="mx-4 img" :src="popular.img"></v-img>

        <v-card-item class="mt-n4">
          <v-card-title class="text-center">
            {{ popular.title }}
          </v-card-title>
        </v-card-item>

        <v-card-text>
          <div class="text-center">
            {{ popular.bio }}
          </div>
          <v-row align="center" class="mx-0 mt-2 d-flex justify-content-center">
            <v-card-text class="d-flex justify-content-center">
              <p class="font-weight-medium">
                $USD {{ popular.price }}
              </p>
            </v-card-text>

            <v-btn @click="agregarAlCarrito(popular)" variant="outlined">
              Añadir al carrito
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const agregarAlCarrito = (producto) => {
  store.commit('agregarAlCarrito', {
    nombre: producto.title,
    precio: producto.price,
    imagen: producto.img,
  });
};


const populars = [
  {
    img: "popular/1.jpg",
    title: "Intercomunicador Wayxin R5",
    price: "99.8",
    bio: " Intercomunicador R5 para cascos, an intimate setting with 12 indoor seats plus patio seatin.",
    disabled: false,
  },
  {
    img: "popular/2.png",
    title: "Appel Mac Book Pro",
    price: "99.8",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    disabled: false,
  },
  {
    img: "popular/3.jpg",
    title: "Mini Microfono",
    price: "99.8",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    disabled: false,
  },
  {
    img: "popular/4.png",
    title: "Reloj",
    price: "99.8",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    disabled: false,
  },
]

</script>

<style scoped>
</style>

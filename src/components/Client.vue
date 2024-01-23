<template>
  <v-row style="background-color: #080A21;">
    <v-col cols="12" sm="6" md="3">
      <v-card class="mx-auto my-12 pb-4" max-width="374" flat color="#080A21" elevation="10">
     <v-img :src="avata" max-height="200px"></v-img>
        <v-card-item >
          <v-card-title class="text-center">Ofertas del dia</v-card-title>
        </v-card-item>

        <v-card-text>
          <div class="text-center">
            <h1>{{ countdown }}</h1>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="3" v-for="(client, i) in clients" :key="i">
      <v-card class="mx-auto my-12 pb-4" max-width="374">
        <v-img height="250" class="mx-4" :src="client.img"></v-img>

        <v-card-item class="mt-n4">
          <v-card-title class="text-center">{{ client.title }}</v-card-title>
        </v-card-item>

      
        <v-card-text>
          <div class="text-center">
            {{ client.bio }}
          </div>
          <v-row align="center" class="mx-0 mt-2 d-flex justify-content-center">
            <v-card-text class="d-flex justify-content-center">
              <p class="font-weight-medium">
                $USD {{ client.price }}
              </p>
            </v-card-text>

            <v-btn @click="agregarAlCarrito(client)" variant="outlined">
              Añadir al carrito
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import avatar from '../assets/avatar.png'


const avata = avatar;

const store = useStore();

const agregarAlCarrito = (producto) => {
  store.commit('agregarAlCarrito', {
    nombre: producto.title,
    precio: producto.price,
    imagen: producto.img,
  });
};


    const countdown = ref('');
    const calculateCountdown = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const updateCountdown = () => {
    const now = new Date();
    const difference = endDate - now;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.value = `${hours}h ${minutes}m ${seconds}s`;

    if (difference <= 0) {
      clearInterval(interval);
      countdown.value = 'Deal expired';
    }
  };

  const interval = setInterval(updateCountdown, 1000);

  updateCountdown();
};

onMounted(() => {
  calculateCountdown();
});
const clients = [
  {
    img: "image/9.png",
    title: "Appel Mac Book Pro",
    price: "$ 93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  },
  {
    img: "image/10.png",
    title: "Appel Mac Book Pro",
    price: "$ 93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  },
  {
    img: "image/11.jpg",
    title: "Appel Mac Book Pro",
    price: "$ 93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  },

]

</script>

<style>
.top-day {
  margin-top: 120px;
}
</style>

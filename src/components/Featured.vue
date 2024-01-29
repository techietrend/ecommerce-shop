<template>
  <v-row>
    <v-col v-for="(feature, i) in featured" 
          :key="i" 
           cols="12" 
           sm="6" 
           md="4" 
           lg="3"
           >
      <v-card 
            class="mx-auto my-12 pb-4" 
            max-width="374" 
            elevation="3"
            >
        <v-img 
              height="250" 
              class="mx-4" 
              :src="feature.img"
              >
         </v-img>

        <v-card-item class="mt-n4">
          <v-card-title class="text-center">{{ feature.title }}</v-card-title>
        </v-card-item>

        <v-card-text>
          <div class="text-center">
            {{ feature.bio }}
          </div>
          <v-row align="center" class="mx-0 mt-2 d-flex justify-content-center">
            <v-card-text class="d-flex justify-content-center">
              <p class="font-weight-medium">
                $USD {{ feature.price }}
              </p>
            </v-card-text>

            <v-btn
              :loading="feature.loading"
              class="flex-grow-1"
              height="48"
              variant="outlined"
              @click="agregarAlCarrito(feature)"
            >
              Añadir al carrito
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();
const featured = ref([
  {
    img: "image/5.png",
    title: "Appel Mac Book Pro",
    price: "93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    loading: false,
  },
  {
    img: "image/6.png",
    title: "Appel Mac Book Pro",
    price: "93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    loading: false,
  },
  {
    img: "image/7.png",
    title: "Appel Mac Book Pro",
    price: "93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    loading: false,
  },
  {
    img: "image/8.png",
    title: "Appel Mac Book Pro",
    price: "93.358.01",
    bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
    loading: false,
  },
]);

const agregarAlCarrito = (producto) => {
  producto.loading = true;

  setTimeout(() => {
    try {
      const productoParaCarrito = {
        nombre: producto.title,
        precio: producto.price,
        imagen: producto.img,
      };

      store.commit('agregarAlCarrito', productoParaCarrito);
    } finally {
      producto.loading = false;
    }
  }, 1000);
};

</script>

<style scoped>
</style>

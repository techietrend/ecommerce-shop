<template>
  <v-app-bar fixed style="background-color: #080A21;">
    <v-app-bar-title>
      <img src="@/assets/logo_light.png" alt="Logo" class="img">
    </v-app-bar-title>

    <div>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="white" v-bind="props">
            Category
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list @click="navigateTo(item.route)" class="w-auto btn">
              {{ item.title }}
            </v-list>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn 
           color="white"
           @click="openCarritoDialog"
           >
        Carrito
      </v-btn>
      <v-btn 
           color="white"
           >
        Robot Challenge
      </v-btn>
      <v-btn 
           color="white"
           >
        Sobre nosotros
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-list-item>
      <v-btn @click="openCarritoDialog">
        <v-icon color="white" class="icono">mdi-cart</v-icon>
        <p class="count bg-warning" :class="{ 'fall-effect': countChanged }">{{ carritoCount }}</p>
      </v-btn>
    </v-list-item>

    <v-dialog v-model="carritoDialog" max-width="1100" max-height="600">
      <Carrito />
    </v-dialog>
  </v-app-bar>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import Carrito from '@/components/Carrito.vue';
import { useStore } from 'vuex';
const store = useStore();

const router = useRouter();
const carritoDialog = ref(false);
const countChanged = ref(false);

const items = [
  { title: 'Componentes de Pc', route: '/componentes-pc' },
  { title: 'Bicicleta', route: '/bicicleta' },
  { title: 'Componentes electronicos', route: '/componentes-electronicos' },
  { title: 'Impresora 3D', route: '/impresora-3d' },
];

const navigateTo = (route) => {
  router.push(route);
};

const carritoCount = computed(() => store.state.carrito.length);

const openCarritoDialog = () => {
  carritoDialog.value = true;
};

watch(carritoCount, () => {
  countChanged.value = true;
  setTimeout(() => {
    countChanged.value = false;
  }, 300); 
});
</script>

<style scoped>
.img {
  width: 100px;
}

.btn:hover {
  color: brown;
}

.count {
  border-radius: 100%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
}

.icono {
  font-size: 20px;
}

.icono:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.fall-effect {
  animation: fall 0.3s ease-in-out;
}

@keyframes fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}
</style>

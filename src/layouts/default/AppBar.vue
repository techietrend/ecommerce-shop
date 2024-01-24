<template>
  <v-app-bar fixed style="background-color: #080A21;">
    <div class="w-auto pl-3">
      <img src="@/assets/logo_light.png" alt="Logo" class="img" 
      @click="inicio"
      >
    </div>

   <div class="w-100 d-flex justify-content-center">
      <v-btn color="white" @click="inicio">
        Inicio
      </v-btn>

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

      <v-btn color="white"
      @click="openCarritoDialog"
      >
        Carrito
      </v-btn>

      <v-btn color="white">
        Robot Challenge
      </v-btn>

      <v-btn color="white">
        Sobre nosotros
      </v-btn>
    </div>

    <v-list-item>
      <v-btn @click="openCarritoDialog">
        <v-icon color="white" class="icono">mdi-cart</v-icon>
        <p class="count bg-warning" :class="{ 'fall-effect': countChanged }">
          {{ carritoCount }}
        </p>
      </v-btn>
    </v-list-item>

    <v-dialog v-model="store.state.dialog" max-width="1100" max-height="600">
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

const inicio = () => {
  router.push('/');
};

const countChanged = ref(false);

const items = [
  { title: 'Componentes de Pc', route: '/componentes-pc' },
  { title: 'Bicicleta componentes', route: '/bicicleta' },
  { title: 'Componentes electronicos', route: '/componentes-electronicos' },
  { title: 'Impresora 3D y CNC', route: '/impresora-3d' },
];

const navigateTo = (route) => {
  router.push(route);
};

const carritoCount = computed(() => store.state.carrito.length);

const openCarritoDialog = () => {
  store.commit('toggleCarritoDialog', true);
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
@media(max-width:768px){
  .img{
    display: none;
  }
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
@media(max-width:768px){
  .container{
    display: grid;
  };
}
</style>

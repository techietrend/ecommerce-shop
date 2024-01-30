<template>
   <v-app-bar color="#080a21">
      <v-app-bar-nav-icon
         variant="text"
         @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <img
         src="@/assets/logo_light.png"
         alt="Logo"
         class="img"
         @click="inicio"
      />

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-filter"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>

      <v-list-item v-if="showCartIcon">
         <v-btn @click="openCarritoDialog">
            <v-icon color="white" class="icono">mdi-cart</v-icon>
            <p
               class="count bg-warning"
               :class="{ 'fall-effect': countChanged }"
            >
               {{ carritoCount }}
            </p>
         </v-btn>
      </v-list-item>
      <v-dialog v-model="store.state.dialog">
         <Carrito />
      </v-dialog>
   </v-app-bar>
   <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
      color="dark"
      class="text-white"
   >
      <v-list>
         <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="navigateTo(item.route)"
         >
            <v-list-item-content>
               <v-list-item-title>
                  {{ item.title }}
               </v-list-item-title>
            </v-list-item-content>
         </v-list-item>
      </v-list>
   </v-navigation-drawer>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import Carrito from '@/components/Carrito.vue'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const drawer = ref(false)

const isFacturacionRoute = computed(
   () => router.currentRoute.value.path === '/facturacion'
)

const showCartIcon = computed(() => {
   return !isFacturacionRoute.value
})

const inicio = () => {
   router.push('/')
}

const countChanged = ref(false)

const items = [
   {
      title: 'Inicio',
      route: '/',
   },
   {
      title: 'Componentes de Pc',
      route: '/componentes-pc',
   },
   {
      title: 'Bicicleta componentes',
      route: '/bicicleta',
   },
   {
      title: 'Componentes electronicos',
      route: '/componentes-electronicos',
   },
   {
      title: 'Impresora 3D y CNC',
      route: '/impresora-3d',
   },
   {
      title: 'Robot Challenge',
      route: '/robot-challenge',
   },
   {
      title: 'Sobre Nostoros',
      route: '/sobre-nosotros',
   },
]

const navigateTo = (route) => {
   router.push(route)
}

const carritoCount = computed(() => store.state.carrito.length)

const openCarritoDialog = () => {
   store.commit('toggleCarritoDialog', true)
}

watch(carritoCount, () => {
   countChanged.value = true
   setTimeout(() => {
      countChanged.value = false
   }, 300)
})
</script>

<style scoped>
 @import '@/styles/appBar.css';
</style>

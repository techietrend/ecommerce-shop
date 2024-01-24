<template>
    <v-container>
    <v-row>
        <v-toolbar color="transparent" class="mt-5">
            <v-toolbar-title>Impresora 3D y CNC</v-toolbar-title>
          </v-toolbar>
      <v-col v-for="(bicicleta, i) in bicicletas" :key="i" cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto my-12 pb-4" max-width="374" elevation="3">
          <v-img height="250" class="mx-4 img" :src="bicicleta.img"></v-img>
  
          <v-card-item class="mt-n4">
            <v-card-title class="text-center">
              {{ bicicleta.title }}
            </v-card-title>
          </v-card-item>
  
          <v-card-text>
            <div class="text-center">
              {{ bicicleta.bio }}
            </div>
            <v-row align="center" class="mx-0 mt-2 d-flex justify-content-center">
              <v-card-text class="d-flex justify-content-center">
                <p class="font-weight-medium">
                  $USD {{ bicicleta.price }}
                </p>
              </v-card-text>
  
              <v-btn
                :loading="bicicleta.loading"
                class="flex-grow-1"
                height="48"
                variant="outlined"
                @click="agregarAlCarrito(bicicleta)"
              >
                Añadir al carrito
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</v-container>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref } from 'vue';
  
  const store = useStore();
  
  const bicicletas = ref([
    {
      img: "image/impresora1.jpg",
      title: "Sensor de Filamento para",
      price: "5500",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
      loading: false,
    },
    {
      img: "image/impresora2.png",
      title: "Luz ultrasonica",
      price: "634300",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
      loading: false,
    },
    {
      img: "image/impresora3.jpg",
      title: "Luz ultrasonica",
      price: "60230",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
      loading: false,
    },
    {   
      img: "image/impresora4.jpg",
      title: "Luz ultrasonica",
      price: "600",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
      loading: false,
    },
    {
      img: "image/impresora1.jpg",
      title: "Luz recargable",
      price: "500",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
      loading: false,
    },
    {
      img: "image/impresora2.png",
      title: "Sensor de Filamento para",
      price: "600",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
      loading: false,
    },
    {
      img: "image/impresora3.jpg",
      title: "Sensor de Filamento para",
      price: "600",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
      loading: false,
    },
    {   
      img: "image/impresora4.jpg",
      title: "Sensor de Filamento para",
      price: "600",
      bio: "Luz para bicicleta recargable por USB. Esta luz es ideal para utilizar en tu bicicleta, cuenta con tecnologia LED T6 y es impermeable.",
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
  
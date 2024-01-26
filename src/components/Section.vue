<template>
    <v-row>
      <v-col v-for="(consola, i) in consolas" :key="i" cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto my-12 pb-4" max-width="374" elevation="3">
          <v-img height="250" class="mx-4 img" :src="consola.img"></v-img>
  
          <v-card-item class="mt-n4">
            <v-card-title class="text-center">
              {{ consola.title }}
            </v-card-title>
          </v-card-item>
  
          <v-card-text>
            <div class="text-center">
              {{ consola.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  const consolas = [
    {
      title: 'Consola 1',
      bio: 'Descripción de la consola 1.',

      img: require('@/assets/consola1.jpg')
    },
    {
      title: 'Consola 2',
      bio: 'Descripción de la consola 2.',

      img: require('@/assets/consola2.jpg')
    },
    {
      title: 'Consola 2',
      bio: 'Descripción de la consola 2.',

      img: require('@/assets/consola2.jpg')
    },
  
    {
      title: 'Consola 2',
      bio: 'Descripción de la consola 2.',

      img: require('@/assets/consola2.jpg')
    },
  
  
  ];
  
  const agregarAlCarrito = (consola) => {
    // Lógica para agregar al carrito
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente si es necesario */
  </style>
  
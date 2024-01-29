<template>
  <v-snackbar v-model="snackbar" location="center">
    Se agrego con exito al carrito
    <template v-slot:actions>
      <v-btn @click="onClick">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup></script>

<style scoped></style>

<template>
  <v-app>
    <default-bar />
    <Whastapp />
    <default-view />
    <FooterVue />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import FooterVue from '@/components/Footer.vue';
  import Whastapp from '@/components/Whastapp.vue';
</script>

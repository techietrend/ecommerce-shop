<template>
  <v-app-bar fixed class="bg-red">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <img src="../../assets/logo_light.png" alt="Logo" class="img">
    </v-app-bar-title>
  
    <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        >
          Category
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup>

const items = [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ]
</script>

<style scoped>

.img{
  width: 100px;
}
</style>

<template>
  <v-app-bar fixed class="bg-red">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <img src="../../assets/logo_light.png" alt="Logo" class="img">
    </v-app-bar-title>
    <v-text-field
      density="compact"
      variant="solo"
      label="Search products"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      fixed
    ></v-text-field>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>

.img{
  width: 100px;
}

</style>

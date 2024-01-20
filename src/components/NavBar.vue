<template>
  <v-app-bar fixed>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Jacsgsaw</v-app-bar-title>
    <v-spacer></v-spacer>
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

    <v-btn prepend-icon="mdi mdi-download-circle-outline">
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>

      Download App
    </v-btn>

    <v-btn> Sign In / Login </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>

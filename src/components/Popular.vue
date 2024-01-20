<template>
  <v-row>
    <v-col cols="3" sm="3" v-for="(popular, i) in populars" :key="i">
      <v-card class="mx-auto my-12 pb-4" max-width="374">
        <v-img height="250" class="mx-4" :src="popular.img"></v-img>

        <v-card-item class="mt-n4">
          <v-card-title class="text-center">{{ popular.title }}</v-card-title>
        </v-card-item>

        <v-card-text>
          <div class="text-center">
            {{ popular.bio }}
          </div>
          <v-row align="center" class="mx-0 mt-2">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <v-spacer></v-spacer>
            <div class="text-grey ms-4">{{ popular.price }}</div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    populars: [
      {
        img: "popular/1.jpg",
        title: "Intercomunicador Wayxin R5",
        price: "Usd $ 99.8",
        bio: " Intercomunicador R5 para cascos, an intimate setting with 12 indoor seats plus patio seatin.",
      },
      {
        img: "popular/2.png",
        title: "Appel Mac Book Pro",
        price: "$ 93.358.01",
        bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
      },
      {
        img: "popular/3.jpg",
        title: "Mini Microfono",
        price: "$ 93.358.01",
        bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
      },
      {
        img: "popular/4.png",
        title: "Reloj",
        price: "$ 93.358.01",
        bio: " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
      },
    ],
  }),
};
</script>

<style></style>

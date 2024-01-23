<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-carousel>
              <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
                <v-row class="fill-height" align="end">
                  <v-col>
                    <div class="btn d-flex justify-content-center">
                      <v-btn @click="showDetail" class="w-25" style="background-color: #080A21; color: white;">Buy Now</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-toolbar color="transparent">
            <v-toolbar-title>Popular Products</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon="mdi mdi-chevron-left"></v-btn>
            <v-btn icon="mdi mdi-chevron-right"></v-btn>
          </v-toolbar>
          <v-col cols="12" sm="12" class="mt-n10">
            <Popular />
          </v-col>
          <v-toolbar color="transparent" class="mt-n10">
            <v-toolbar-title>Featured Products</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon="mdi mdi-chevron-left"></v-btn>
            <v-btn icon="mdi mdi-chevron-right"></v-btn>
          </v-toolbar>
          <v-col cols="12" sm="12" class="mt-n10">
            <Featured />
          </v-col>
          <v-col cols="12" sm="12" class="mt-n10">
            <Client />
          </v-col>

          <v-col cols="12" sm="12" class="mt-n10">
            <v-row>
              <v-col cols="12" sm="4">
                <v-card class="mx-auto my-12 pb-4" max-width="374">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-card-item class="mt-10">
                        <v-card-title class="text-center">Smart watch</v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <div class="text-center">
                          Small plates, salads & sandwiches
                        </div>
                        <div class="text-center mt-4">
                          <v-btn color="black">Buy Now</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-img height="250" class="mx-4" :src="image"></v-img>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="mx-auto my-12 pb-4" max-width="374" color="red">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-card-item class="mt-10">
                        <v-card-title class="text-center">Smart watch</v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <div class="text-center">
                          Small plates, salads & sandwiches
                        </div>
                        <div class="text-center mt-4">
                          <v-btn color="black">Buy Now</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-img height="250" class="mx-4" :src="image1"></v-img>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="mx-auto my-12 pb-4" max-width="374">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-card-item class="mt-10">
                        <v-card-title class="text-center">Smart watch</v-card-title>
                      </v-card-item>

                      <v-card-text>
                        <div class="text-center">
                          Small plates, salads & sandwiches
                        </div>
                        <div class="text-center mt-4">
                          <v-btn color="black">Buy Now</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-img height="250" class="mx-4" :src="image2"></v-img>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Popular from "@/components/Popular.vue";
import Featured from "@/components/Featured.vue";
import Client from "@/components/Client.vue";
import router from "@/router";
import imagen from '../../public/image/13.jpg';
import imagen1 from '../../public/image/14.jpg';
import imagen2 from '../../public/image/15.jpg';

const image = imagen;
const image1 =imagen1;
const image2 = imagen2;

const items = [
  {
    src: "banner2.jpg",
    title: "Surface Studio",
    text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
  },
  {
    src: "banner1.jpg",
    title: "Surface Studio",
    text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
  },
  {
    src: "banner3.jpg",
    title: "Surface Studio",
    text: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès ",
  },
]

const showDetail = () => {
  router.push('/detail');
};
</script>

<style scoped>
.btn {
  margin-bottom: 30px;
}
</style>

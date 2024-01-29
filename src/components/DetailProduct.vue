<template>
    <v-card class="p-2">
        <v-row>
            <v-col 
                   cols="12" 
                   md="6"
                   >
                <v-carousel>
                    <v-carousel-item 
                            v-for="(image, index) in imagenes" 
                            :key="index">
                        <v-img 
                              :src="image" 
                               alt="Producto" 
                               max-height="300"
                               >
                         </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="d-flex flex-column bg-grey-lighten-5 mb-3 p-5 h-100">
                    <v-card-title>
                        Descripcion de {{ producto.title }}
                    </v-card-title>
                    <v-sheet>
                        {{ producto.bio }}
                    </v-sheet>
                    <v-chip color="primary" 
                            dark 
                            class="d-flex justify-content-center">
                        $USD {{ producto.price }}
                    </v-chip>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>
  
<script setup>
import { ref } from 'vue';
const props = defineProps(['producto']);



const imagenes = ref([props.producto.img])
</script>
  
<style scoped></style>
  
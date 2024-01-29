<template>
    <v-row>
        <v-col v-for="(item, index) in items" 
               :key="index" 
               cols="12" 
               sm="6" 
               md="4" 
               lg="3"
               class="bg-blue p-3"
               >
            <v-card 
                   max-width="374"
                   class="card-hover p-2 bg-blue-lighten-5"
                   elevation-10
                   >
                <v-img 
                    :src="item.imageSrc" 
                    cover 
                    max-height="150" 
                    class="bg-grey-lighten-2"
                   >
                </v-img>
                <v-card-title class="title">
                    {{ item.title }}
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script setup>
import mouse from '../assets/blackMouse.png'
import auriculares from '../assets/auris.png'
import gamer from '../assets/gamer.png'


const items = [
    { imageSrc: mouse, title: "Productos Destacados" },
    { imageSrc: auriculares, title: "Lo Más Vendido" },
    { imageSrc: gamer, title: "Semana de Descuentos" },
    { imageSrc: gamer, title: "Semana de Descuentos" },
];
</script>
  
<style scoped>
.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.title {
    font-size: 15px;
}
</style>

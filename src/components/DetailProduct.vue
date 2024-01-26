<template>
    <v-card>
        <v-card-title class="headline h1">
            Detalles de {{ producto.title }}
        </v-card-title>
        <v-card-subtitle class="text-dark h2">
            {{ producto.bio }}
        </v-card-subtitle>
        <v-card-text>
            <v-img :src="producto.img" alt="Producto" max-height="300"></v-img>
            <v-row justify="end">
                <v-col>
                    <v-chip color="primary" dark>
                        $USD {{ producto.price }}
                    </v-chip>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
  
<script setup>

const props = defineProps(['producto', 'agregarAlCarrito', 'dialogVisible']);

</script>
  
<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
  
<template>
    <v-card>
        <v-card-title class="text-white" style="background-color: #080A21">Contenido del Carrito</v-card-title>
        <v-list>
            <v-list-item-group v-if="carrito.length > 0">
                <v-list-item v-for="(product, index) in carrito" :key="index">
                    <hr>
                    <div class="item-content justify-space-between">
                        <div class="pl-5">
                            <v-img :src="product.imagen" style="width: 100px; height: 100px;" />
                        </div>
                        <div>
                            <v-list-item-title>{{ product.nombre }}</v-list-item-title>
                        </div>
                        <div>
                            <v-list-item-title> Usd {{ product.precio }}</v-list-item-title>
                        </div>
                        <v-list-item-action>
                            <v-list-item-subtitle>Eliminar producto</v-list-item-subtitle>
                             <span>&#160;&#160;</span>
                            <v-btn icon @click="removeFromCarrito(index)">
                                <v-icon size="small" color="red">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
            </v-list-item-group>
            <v-list-item v-else>
                <v-list-item-subtitle>No hay productos en el carrito</v-list-item-subtitle>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions class="justify-end">
            <v-btn text>
                Subtotal: Usd$ {{ total }}
            </v-btn>
        </v-card-actions>

        <v-card-actions class="justify-end">
            <v-select v-model="tipoEnvio" 
                      :items="tiposEnvio" 
                     label="Tipo de Envío"
                     :disabled="carrito.length === 0"
                     >
           </v-select>
        </v-card-actions>

        <v-card-actions class="d-flex justify-lg-space-around bg-white">
            <v-btn text color="primary" class="w-auto" @click="agregarMasProductos">
                Agregar mas productos
            </v-btn>
            <v-btn text color="white" class="w-auto bg-dark" :disabled="carrito.length === 0">
                Finalizar tu compra
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore();
const carrito = computed(() => store.state.carrito);
const carritoDialog = ref(false);


const removeFromCarrito = (index) => {
    store.commit('eliminarDelCarrito', index);
};

const total = computed(() => {
    const totalSinEnvio = carrito.value.reduce((acc, product) => acc + parseFloat(product.precio), 0);
    if (tipoEnvio.value === 'Envío Internacional - DHL Express: $ 46.3') {
        return (totalSinEnvio + 46.3).toFixed(2);
    }
    return totalSinEnvio.toFixed(2);
});


const tiposEnvio = [
    'Recogida Local - Concretar Por Whatsapp',
     'Envío Internacional - DHL Express: $ 46.3'
    
];

const tipoEnvio = ref(tiposEnvio[0]);

const agregarMasProductos = () => {
    carritoDialog.value = false;
};
</script>
  
<style scoped>
.item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
  
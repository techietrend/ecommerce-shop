<template>
   <v-container>
      <h2>Detalles de la Facturación</h2>
      <div class="d-flex">
         <v-list
            class="w-50"
            style="
               background-color: whitesmoke;
               padding: 50px;
               border: 1px solid #080a21;
               border-radius: 5px;
            "
         >
            <p class="h6">Completar Datos</p>
            <form @submit.prevent="submit">
               <v-text-field
                  v-model="name.value.value"
                  :counter="10"
                  :error-messages="name.errorMessage.value"
                  label="Name"
               ></v-text-field>

               <v-text-field
                  v-model="phone.value.value"
                  :counter="7"
                  :error-messages="phone.errorMessage.value"
                  label="Phone Number"
               ></v-text-field>

               <v-text-field
                  v-model="email.value.value"
                  :error-messages="email.errorMessage.value"
                  label="E-mail"
               ></v-text-field>

               <v-select
                  v-model="select.value.value"
                  :items="items"
                  :error-messages="select.errorMessage.value"
                  label="Envío"
               ></v-select>
               <div class="d-flex justify-content-end">
                  <v-checkbox
                     v-model="checkbox.value.value"
                     :error-messages="
                        checkbox.errorMessage.value
                     "
                     value="1"
                     label="Acepta terminos y condiciones"
                     type="checkbox"
                  ></v-checkbox>

                  <v-btn @click="handleReset">
                     Borrar campos
                  </v-btn>
               </div>
            </form>
         </v-list>
         <v-list class="w-50">
            <v-list-item
               v-for="(product, index) in productos"
               :key="index"
            >
               <div class="item-content justify-space-between">
                  <div class="pl-5 d-flex">
                     <v-img
                        :src="product.imagen"
                        style="width: 50px; height: 50px"
                     />
                  </div>
                  <div>
                     <v-list-item-title class="text-muted"
                        >Cantidad x
                        {{ product.cantidad }}</v-list-item-title
                     >
                  </div>
                  <div>
                     <v-list-item-title>{{
                        product.nombre
                     }}</v-list-item-title>
                  </div>
                  <div>
                     <v-list-item-title
                        >Usd${{
                           product.precio
                        }}</v-list-item-title
                     >
                  </div>
               </div>
            </v-list-item>
         </v-list>
      </div>

      <div class="d-flex w-100 justify-content-end">
         <div class="mt-2">
            <h5>Subtotal: Usd$ {{ subtotal }}</h5>
         </div>
      </div>

      <div class="d-flex justify-content-end">
         <v-btn
            @click="realizarCompra"
            class="mt-5 mb-10 w-25 bg-warning"
            >Realizar Compra</v-btn
         >
      </div>
   </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useField, useForm } from 'vee-validate'

const store = useStore()
const productos = computed(() => store.state.carrito)
const subtotal = ref(store.state.subTotal)

const items = ref([
   'Envío Internacional - DHL Express: $ 46.3',
   'Recogida Local - Concretar Por Whatsapp',
])

const { handleSubmit, handleReset } = useForm({
   validationSchema: {
      name(value) {
         if (value?.length >= 2) return true

         return 'Name needs to be at least 2 characters.'
      },
      phone(value) {
         if (value?.length > 9 && /[0-9-]+/.test(value))
            return true

         return 'Phone number needs to be at least 9 digits.'
      },
      email(value) {
         if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value))
            return true

         return 'Must be a valid e-mail.'
      },
      select(value) {
         if (value) return true

         return 'Select an item.'
      },
      checkbox(value) {
         if (value === '1') return true

         return 'Must be checked.'
      },
   },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')
const submit = handleSubmit((values) => {
   alert(JSON.stringify(values, null, 2))
})

const realizarCompra = () => {
   console.log('asd')
}
</script>

<style scoped>
.item-content {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
</style>

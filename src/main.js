// main.js

import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'
import store from '@/store/store' // Importa tu tienda Vuex

const app = createApp(App)

registerPlugins(app)

app.use(store) // Usa tu tienda Vuex

app.mount('#app')

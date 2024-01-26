import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
      path:'/detail',
      name:'Detail',
      component: () => import('@/views/detail.vue')
      },
      {
        path:'/bicicleta',
        name:'Bicicleta',
        component: () => import('@/views/Bicicleta.vue')
      },
      {
        path:'/componentes-pc',
        name:'ComponentesPc',
        component: () => import('@/views/ComponentesPc.vue')
      },
      {
        path:'/impresora-3d',
        name:'Impresoras3D',
        component: () => import('@/views/Impresoras3D.vue')
      },
      {
        path:'/facturacion',
        name:'Facturacion',
        component: () => import('@/views/Facturacion.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

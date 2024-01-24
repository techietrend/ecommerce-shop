import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
      path:'/detail',
      name:'Detail',
      component: () => import('@/views/Detail.vue')
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

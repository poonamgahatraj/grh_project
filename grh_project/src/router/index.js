
import { createRouter, createWebHistory } from 'vue-router'

import product_detail from '../components/product_detail.vue';
import product_Info from '../components/product_Info.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product_detail',
      component: product_detail
    },
    
     

    {
      path: '/product_Info',
      name: 'product_Info',
      component: product_Info
    },
   
  ]
})

export default router

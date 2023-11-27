
import { createRouter, createWebHistory } from 'vue-router'

import product_detail from '../components/product_detail.vue';
import product_form from '../components/product_form.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product_detail',
      component: product_detail
    },
    
     

    {
      path: '/product_form',
      name: 'product_form',
      component: product_form
    },
   
  ]
})

export default router

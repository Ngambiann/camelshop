import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Products from "./../components/Products.vue"
import ContactUs from "./../components/ContactUs.vue"
import Cart from "./../components/Cart.vue"
import AboutUs from "./../components/AboutUs.vue"
const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products,
      },
      {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
      },
      {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
      },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router
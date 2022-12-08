import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("@/views/Home.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("@/views/About.vue")
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import("@/views/Contact.vue")
    }
  ]
})

export default router

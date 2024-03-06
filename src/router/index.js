import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      path: "/",
      name: "landing",
      component: () => import('../components/landing.vue'),
   },
   {
      path: "/:id",
      name: "service",
      component: () => import('../components/service.vue'),
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
   scrollBehavior(){
      return {top: 0}
   }
 });

export default router;
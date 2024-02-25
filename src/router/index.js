import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      path: "/",
      name: "landing",
      component: () => import('../components/landing.vue'),
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
 });

export default router;
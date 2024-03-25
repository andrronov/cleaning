import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("../components/landing.vue"),
  },
  {
    path: "/:id",
    name: "service",
    component: () => import("../components/service.vue"),
  },
  {
    path: "/prices",
    name: "prices",
    component: () => import("../components/prices.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../components/contacts.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../components/allServices.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

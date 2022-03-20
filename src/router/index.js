import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LogIn.vue"),
    },
    {
      path: "/WriteIng",
      name: "write",
      component: () => import("../components/WriteIng.vue"),
    },
    {
      path: "/LogOut",
      name: "LogOut",
      component: () => import("../components/LogOut.vue"),
    },
    {
      path: "/ProFile",
      name: "Profile",
      component: () => import("../components/ProFile.vue"),
    },
    {
      path: "/ReGis",
      name: "ReGis",
      component: () => import("../components/ReGis.vue"),
    },
    {
      path: "/HiLight",
      name: "HiLight",
      component: () => import("../components/HiLight.vue"),
    },
  ],
});

export default router;

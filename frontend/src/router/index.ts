import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";

const routes:RouteRecordRaw[] = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;
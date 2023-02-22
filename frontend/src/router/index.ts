import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import CreateRoom from "../pages/CreateRoom.vue";
import WaitRoom from "../pages/WaitRoom.vue";

const routes:RouteRecordRaw[] = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
  {
    path:'/createRoom',
    name:'createRoom',
    component:CreateRoom,
  },
  {
    path:'/waitRoom',
    name:'waitRoom',
    component:WaitRoom,
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;
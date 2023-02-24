import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import CreateRoom from "../pages/CreateRoom.vue";
import WaitRoom from "../pages/WaitRoom.vue";
import JoinRoom from "../pages/JoinRoom.vue";

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
    props: (route: any) => ({
      pw: route.query.pw,
      number: route.query.number,
    })
  },
  {
    path:'/joinRoom',
    name:'joinRoom',
    component:JoinRoom,
    props: (route: any) => ({
      pw: route.query.pw,
      number: route.query.number,
    })
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;
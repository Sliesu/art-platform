import { createRouter, createWebHistory } from 'vue-router';
import Leaflet from "@/components/login/Leaflet";
import Home from "@/components/home/Home";
import WebLayout from "@/platform/WebLayout";
import Login from "@/components/login/Login";
import TestLayOut from "@/components/test/TestLayOut";


const routes = [
  {
    path: '/',
    component: WebLayout,
    redirect: '/home', // 添加一个重定向选项
    children: [
      {
        path: 'leaflet',
        component: Leaflet,
        name: 'default',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'login',
        component: Login,
      },
    ],
  },
  {
    path: '/test',
    component: TestLayOut,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

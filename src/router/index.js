import { createRouter, createWebHistory } from 'vue-router';
import Leaflet from "@/components/login/Leaflet";
import Home from "@/components/home/Home";
import WebLayout from "@/platform/WebLayout";
import Login from "@/components/login/Login";

const routes = [
  {
    path: '/',
    component: WebLayout,
    children: [
      {
        path: 'leaflet',
        component: Leaflet,
        name: 'default',
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'login',
        component: Login
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

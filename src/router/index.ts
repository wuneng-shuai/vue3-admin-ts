import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import login from '@/views/login/loginViews.vue';
import layout from '@/views/layout/layoutViews.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: login,
  },
  {
    path: '/',
    redirect: '/layout',
    component: layout,
    children: [
      {
        path: '/layout',
        component: layout,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

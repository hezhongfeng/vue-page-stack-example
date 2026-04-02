import { createRouter, createWebHashHistory } from 'vue-router';
import { ROUTE_PATHS } from '@/constants/routes';

const routes = [
  { path: ROUTE_PATHS.index, component: () => import('../views/index/Index.vue') },
  { path: ROUTE_PATHS.home, component: () => import('../views/home/Home.vue') },
  {
    path: ROUTE_PATHS.mainDetail,
    component: () => import('../views/main/MainDetail.vue')
  },
  { path: ROUTE_PATHS.login, component: () => import('../views/login/Login.vue') }
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
});

export default router;

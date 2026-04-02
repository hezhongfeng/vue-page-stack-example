import { createRouter, createWebHashHistory } from 'vue-router';
import { ROUTE_PATHS } from '@/constants/routes';

const routes = [
  {
    path: ROUTE_PATHS.index,
    component: () => import('../views/index/Index.vue'),
    meta: {
      titleKey: 'route.index'
    }
  },
  {
    path: ROUTE_PATHS.home,
    component: () => import('../views/home/Home.vue'),
    meta: {
      titleKey: 'route.home'
    }
  },
  {
    path: ROUTE_PATHS.mainDetail,
    component: () => import('../views/main/MainDetail.vue'),
    meta: {
      titleKey: 'route.mainDetail'
    }
  },
  {
    path: ROUTE_PATHS.login,
    component: () => import('../views/login/Login.vue'),
    meta: {
      titleKey: 'route.login'
    }
  }
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
});

export default router;

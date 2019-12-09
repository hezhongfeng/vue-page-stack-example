import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/views/index/Index');
const MainDetail = () => import('@/views/main/MainDetail');
const Login = () => import('@/views/login/Login');
const Home = () => import('@/views/home/Home');

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Index
  },
  { path: '/home/:tab', component: Home },
  {
    path: '/main-detail/:id',
    component: MainDetail
  },
  { path: '/login', component: Login }
];

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next();
});

export default router;

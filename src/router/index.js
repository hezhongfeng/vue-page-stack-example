import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index/Index';
import MainList from '@/views/main/MainList';
import MainDetail from '@/views/main/MainDetail';
import Login from '@/views/login/Login.vue';
import Signup from '@/views/login/Signup';
import Home from '@/views/home/Home';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/main',
    component: MainList
  },
  {
    path: '/main-detail/:id',
    component: MainDetail
  },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/home/:tab', component: Home }
];

let router = new Router({
  routes
});
// 导航守卫

export default router;

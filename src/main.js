import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import VuePageStack from 'vue-page-stack';

Vue.config.productionTip = false;
Vue.use(VuePageStack, { router });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

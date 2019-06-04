import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import VuePageStack from 'vue-page-stack';

Vue.config.productionTip = false;
Vue.use(VuePageStack, { router, name: 'VuePageStack' });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

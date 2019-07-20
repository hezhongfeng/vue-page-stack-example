import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import VuePageStack from 'vue-page-stack';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.use(VuePageStack, { router });

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');

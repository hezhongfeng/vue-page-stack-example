import { createApp } from 'vue';
import router from './router';
import { i18n } from './i18n';
import App from './App.vue';

import VuePageStack from '../../vue-page-stack/dist/vue-page-stack.es';
// import VuePageStack from 'vue-page-stack';

const app = createApp(App);

app.use(router);

app.use(VuePageStack, { router });

app.use(i18n);

app.mount('#app');

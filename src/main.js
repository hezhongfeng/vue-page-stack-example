import { createApp } from 'vue';
import router from './router';
import { i18n } from './i18n';
import App from './App1.vue';

import { VuePageStackPlugin } from '../../vue-page-stack/dist/vue-page-stack.es';
// import VuePageStack from 'vue-page-stack';

const app = createApp(App);

app.use(router);

app.use(VuePageStackPlugin, { router });

app.use(i18n);

app.mount('#app');

import { createApp } from 'vue';
import router from './router';
import { i18n } from './i18n';
import App from './App.vue';
import './styles/tokens.scss';
import './styles/base.scss';
import './styles/utilities.scss';
import { APP_NAME } from './constants/app';
import { installRouteTitleSync } from './router/title';

import { VuePageStackPlugin } from 'vue-page-stack';
// import { VuePageStackPlugin } from '../../vue-page-stack/dist/vue-page-stack.es';

const app = createApp(App);

app.use(router);

app.use(VuePageStackPlugin, { router });

app.use(i18n);

installRouteTitleSync(router, i18n, APP_NAME);

app.mount('#app');

import { createApp } from 'vue';
import router from './router';
import { i18n } from './i18n';
import App from './App.vue';
import { APP_NAME } from './constants/app';

import { VuePageStackPlugin } from 'vue-page-stack';
// import { VuePageStackPlugin } from '../../vue-page-stack/dist/vue-page-stack.es';

const app = createApp(App);

app.use(router);

app.use(VuePageStackPlugin, { router });

app.use(i18n);

router.afterEach(to => {
  const titleKey = to.meta?.titleKey;
  document.title = titleKey ? i18n.global.t(titleKey) : APP_NAME;
});

app.mount('#app');

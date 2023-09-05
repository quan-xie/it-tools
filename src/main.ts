import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import ScriptX from 'vue-scriptx';
import Ads from 'vue-google-adsense';

import { registerSW } from 'virtual:pwa-register';
import { plausible } from './plugins/plausible.plugin';

import 'virtual:uno.css';

import { naive } from './plugins/naive.plugin';

import App from './App.vue';
import router from './router';
import { i18nPlugin } from './plugins/i18n.plugin';



registerSW();

const app = createApp(App);

app.use(createPinia());
app.use(createHead());
app.use(i18nPlugin);
app.use(router);
app.use(naive);
app.use(plausible);


app.use(ScriptX);

app.use(Ads.Adsense);
app.use(Ads.InArticleAdsense);
app.use(Ads.InFeedAdsense);

app.mount('#app');

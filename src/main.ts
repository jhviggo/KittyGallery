import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import { initClients } from '@/utils/contentful';

import '@/assets/scss/buttons.scss';

Vue.config.productionTip = false;

initClients();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

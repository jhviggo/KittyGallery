import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "index" */ './views/index.vue')
    },
    {
      path: '/commissions',
      name: 'commissions',
      component: () => import(/* webpackChunkName: "commission" */ './views/commissions/index.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "gallery" */ './views/gallery/index.vue')
    }
  ]
});

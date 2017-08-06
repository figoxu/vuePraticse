import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/index'
import '../static/css/main.css'

import Vuex from 'vuex';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
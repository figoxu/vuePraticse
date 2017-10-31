import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/index'
import store from './store'
import '../static/css/main.css'

import Vuex from 'vuex';
import App from './app.vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueECharts from 'vue-echarts/dist/vue-echarts'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.component('chart', VueECharts);

// 路由配置


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
});
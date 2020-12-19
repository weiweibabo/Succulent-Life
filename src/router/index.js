import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      //設定路徑
      path: '/', //自訂路徑
      name: 'Home', //設定名稱
      component: Home
    },
  ],
});
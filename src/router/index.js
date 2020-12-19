import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      //設定路徑
      path: '/', //自訂路徑
      name: 'index', //設定名稱
    },
  ],
});
import Vue from 'vue'
import App from './App.vue'
// 引入路由配置项
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  // 挂载路由实例
  router,
  render: h => h(App)
}).$mount('#app')

// 引入vue
import Vue from 'vue'
// 引入app组件，它是所有组件的父组件
import App from './App.vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import { Field } from 'vant'
import { Cascader } from 'vant';
import { Toast } from 'vant';
// 关闭生产提示
Vue.config.productionTip = false

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL='http://192.168.0.88:2000/weather'
// axios.defaults.baseURL='http://apis.juhe.cn/simpleWeather'

Vue.use(Vant)
Vue.use(Field);
Vue.use(Cascader);
// 将请求挂载到vue原型上
Vue.prototype.$http = axios

// 创建vue
new Vue({
  render: h => h(App)
}).$mount('#app')
 
import Vue from 'vue'
import VueRouter from 'vue-router'
// 页面路径
import HomeView from '../views/HomeView.vue'
// 全局注册
Vue.use(VueRouter)
// 配置路由规则
const routes = [
  {
    // 路由路径
    path: '/',
    // 路由名称
    name: 'home',
    // 对应的组件
    component: HomeView
  },
  {
    // 路由路径
    path: '/home',
    // 路由名称 唯一的
    name: 'home',
    // 路由重定向： 替换的路径
    redirect:'/about'
  },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载  
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'list',
    // 路由懒加载  
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/my',
    name: 'my',
    // 路由懒加载  
    component: () => import( '../views/My.vue')
  },
  {
    // 动态路由 /路径/:变化的值
    path: '/addlist/:id',
    name: 'addlist',
    // 路由懒加载  
    component: () => import('../views/Addlist.vue')
  },
  {
    path:'/shop',
    name:'shop',
    component: () => import('../views/Shop.vue'),
    // 别名
    alias:['/ss'],
    // 嵌套路由
    children:[
      {
        path:'/shop/car', //子路由的路径中要包含父路由
        component:()=>import('../views/Car.vue')
      }
    ]
  },
  {
    path:'/cart',
    name:'cart',
    component: () => import('../views/Car.vue'),
  },
  {
    path:'*',  //匹配所有路径
    redirect:'/' //上述路径都不存在时，重定向到其他页面
  }
]
// 创建路由实例
const router = new VueRouter({
  // history：格式：http://localhost:8080/about
  // hash:格式 ：http://192.168.0.88:8080/#/
  mode:'hash',

  routes
})
// 导出路由实例
export default router

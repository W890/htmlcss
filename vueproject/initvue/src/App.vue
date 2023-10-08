<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 使用 -->
    <!-- 父组件传子组件通过属性绑定的形式 -->
    <!-- 子传父，通过自定义事件的方式 -->
    <!-- <Userlist ref="userref" :text="'父组件闯祸了'" @lake="pinefun">
      我是通过插槽传递过来的
    <p slot="conten">我是具名插槽传递过来的</p>
    </Userlist>
    <Login></Login> -->
    
    <!-- 子向父 -->
    <!-- <component is="Userlist"></component> -->
    <!-- 动态组件 -->

    <!-- keep-alive：包裹动态组件的状态还有实例，避免在组件切换时重新渲染和销毁 -->
    <!-- <keep-alive>
      <component :is="comdata"></component>
    </keep-alive> -->
   
    <!-- <button @click="togglecom()">切换</button> -->
    
    <Phone></Phone>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 引入组件
import Userlist from './components/Userlist.vue';
import Login from './components/Login.vue'
import Phone from './components/Phone.vue'

export default {
  name: 'App',
  data(){
    return {
      comdata:'HelloWorld'
    }
  },
  components: {
    HelloWorld,
    // 注册完成
    Userlist,
    Login,
    Phone,
  },
  methods:{
    pinefun(e){
      console.log('.我是父组件接收子组件的值：',e);
    },
    // 切换组件
    togglecom(){
      this.$refs['userref'].open2()
      this.comdata = this.comdata === 'Userlist'?'HelloWorld':'Userlist'
    },
    // creatrd(){
    //   this.$nextTick(()=>{
    //     this.$refs['userref'].open2()
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title{
  color: blueviolet;
}
</style>

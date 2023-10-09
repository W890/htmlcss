<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/shop">shop</router-link>|
      <router-link :to="{name:'about'}">anme:about</router-link>|
      <router-link to="/list">list</router-link>|
      <router-link to="/addlist">addlist</router-link>
    </nav> -->
    <router-view />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/list" icon="search">列表</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onChange() {

    }
  }
}
</script>
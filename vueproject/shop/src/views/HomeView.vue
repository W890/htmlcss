<template>
  <div class="home">
    <div class="shop-swupe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banner" :key="item.goods_id"
          ><img :src="item.image_url" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item v-for="(item, index) in notice" :key="index">{{
          item.content
        }}</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
    <!-- 导航宫格 -->
    <van-grid :column-num="channel.length">
      <van-grid-item
        v-for="item in channel"
        :key="item.id"
        :icon="item.icon_url"
        :text="item.name"
      />
    </van-grid>
    <!-- 商品展示 -->
    <div class="goods_list"  v-for="item in categoryList" :key="item.goods_id">
      <div class="item-title">
        <img :src="item.banner" alt=""/>
        <span>{{item.name}}</span>
      </div>
      <div class="list">
        <van-grid :border="false" :column-num="3" :center="false" gutter="10">
        <van-grid-item v-for="item2 in item.goodsList" :key="item2.id">
          <van-image :src="item2.list_pic_url" />
          <span class="list-title">{{item2.name}}</span>
          <span class="list-price">￥{{ item2.min_retail_price }}</span>
        </van-grid-item>
      </van-grid>
      </div>
    </div>
    <br><br><br><br><br><br>
  </div>
</template>

<script>
// @ is an alias to /src
// 引入定义好的接口
import { GetAppInfo } from "../api/home";

export default {
  name: "HomeView",
  data() {
    return {
      // 轮播图数据
      banner: [],
      // 通知的数据
      notice: [],
      // 分类展示的数据
      categoryList: [],
      // 分类导航的数据
      channel: [],
    };
  },
  // 元素加载完成
  mounted() {
    // 发起请求获取数据
    this.getdata();
  },
  methods: {
    // 获取数据
    // 使用async await 来处理promise
    async getdata() {
      // 结构赋值获取banner
      let {
        data: { banner, notice, categoryList, channel },
      } = await GetAppInfo();
      // 给data中的banner赋值
      this.banner = banner;
      // 使用展开运算符进行数组的合并
      this.notice = [...notice, { content: "自己添加的通知" }];
      this.categoryList = categoryList;
      this.channel = channel;
    },
  },
};
</script>
<style>
#app {
  background-color: #f7f7f7;
}
.shop-swupe {
  height: 100%;
}
img {
  width: 100%;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}

/* 商品列表 */
.item-title {
  padding: 10px;
  text-align: center;
  color: white;
  border-radius: 15px;
  position: relative;
}
.item-title span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;
}
.list-title{
  font-size: 14px;

  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  
  width: 88px;
  line-height: 20px;
  margin-top: 10px;
  
}
.list-price{
  color: red;
}
</style>

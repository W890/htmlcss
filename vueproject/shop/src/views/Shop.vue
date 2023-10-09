<template id="app">
    <div>
        <p>我是shop</p>
        <!-- 子路由的占位符 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log('包含路由信息的对象',this.$route);
            // 接收传递过来的参数，query:GET
            console.log(this.$route.query.id);
        }
    }
</script>
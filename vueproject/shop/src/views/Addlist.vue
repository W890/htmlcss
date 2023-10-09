<template id="temp">
    <div>
        <p>传递的订单</p>
    </div>
</template>

<script>
    export default {
        mounted(){
            // 页面中接收动态路由的值
            console.log(this.$route.params.id);
        }       
    }
</script>
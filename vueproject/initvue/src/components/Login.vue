<template><!--vue实例外创建 定义组件-->
    <div>
        <h1 class="titlel">
            我是登录组件的
        </h1>
    </div>
</template>
<script>
    export default{
        name:'Login',
        props:['text'],
        methods:{
           
        }
    }
</script>
<style>
.titlel{
    color: red;
}
</style>
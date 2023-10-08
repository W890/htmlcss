<template><!--vue实例外创建 定义组件-->
    <div>
        我是userlist组件
        <p>父组件传递过来的：{{ text }}</p>

        <p>子向父传递</p>
        <button @click="open()">发送</button>

        <!-- 插槽 -->
        <br>
        <slot>
            我就是个坑，没有传递我就出来了
        </slot>
        <h1 class="titleu">
            我是uuser组件的
        </h1>
    </div>
</template>
<script>
    export default{
        name:'Userlist',
        props:['text'],
        methods:{
            open(){
                // 注册事件
                this.$emit('lake','没事，交给天壹')
            },
            open2(){
                console.log('user组件中的方法');
            }
        },
        beforeCreate(){
            
        },
        created(){
        //     console.log(this.$http);

        //     // this.$http.get('/citylist')
        //     this.$http.get('/query')
        //     .then(res=>{
        //         console.log(res.data);
        //     })
        }

    }
</script>

<style>
.titleu{
    color: blue;
}
</style>
<template id="temp">
    <div>
        <p>我是商品列表</p>
        <router-link to="/shop?id=123456">查看商品详情</router-link>
        <br>
        <router-link to="/addlist/123456">添加商品清单</router-link>
        <button @click="goto">前进</button>
        <button @click="back">后退</button>
        <button @click="gogo">gogo</button>
        <button @click="look">去看详情</button>
    </div>
</template>

<script>
    export default{
        methods:{
            goto(){ //前进
                this.$router.forward()
            },
            back(){  //后退
                this.$router.back()
            },
            gogo(){ //gogo
                this.$router.go(1)
            },
            look(){ //详情
                // this.$router.push({
                //     name:'shop',
                //     query:{
                //         id:'我是编程导航传递过来的'
                //     }
                // })
                // this.$router.push({path:'shop'})
                this.$router.push({name:'addlist',params:{id:
                '我是编程导航带来的'
                }
                })
            }
        }
    }
</script>
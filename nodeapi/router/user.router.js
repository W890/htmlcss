// 和用户相关的路由模块
// 2.1引入koa-router
const Router = require('koa-router')
// 实例化路由对象
const router = new Router()

// 2.1.1编写路由规则
router.get('/', (ctx) => {
    ctx.body = {
        code: 200,
        msg: '首页获取成功'
    }
})
router.get('/users', (ctx) => {
    ctx.body = {
        code: 200,
        data: {
            username: 'admin',
            name: '世界如此美好，睁眼闭眼就是一天'
        },
        msg: '用户获取成功'
    }
})
router.get('/userr/username&password', (ctx) => {
    // 请求参数的解析
    // 以键值对形式进行传参
    // 例如：id=123456&afe=456789
    console.log(ctx.query);
    ctx.body = {
        code: 200,
        data: {
            username: 'admin',
            passwork: 123456
        },
        msg: '用户获取成功'
    }
})

// 通过路由传参的时候通过路由传参
router.post('/userp', (ctx) => {
    //    接受post传参
    console.log(ctx.request.body);

    ctx.body = {
        code: 200,
        data: {
            username:'admin',
            name:'东风'
        },
        msg: '用户获取成功post'
    }
})


router.post('/login', (ctx) => {
    let {username,password} = ctx.request.body
    console.log(ctx.request.body);
    if (password !== 'dd123456'){
        ctx.body = {
            code: 201,
            msg: '密码错误'
        }
    }else {
        ctx.body = {
            code: 200,
            data:{
                username:'admin',
                name:'东风',
                token:'asdfghjkl',
            },
            
            msg: '用户获取成功'
        }
    }
    // ctx.body = {
    //     code: 200,
    //     data:{
    //         username:'admin',
    //         name:'东风'
    //     },
    //     token:'asdfghjkl',
    //     msg: '用户获取成功'
    // }
    
})

// 导出路由模块
module.exports = router
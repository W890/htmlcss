// 1.导入koa的包
const koa = require('koa')
// 2.实例化对象
const app = new koa()
// 2.1引入koa-router
const Router = require('koa-router')
// 实例化路由对象
const router = new Router()

// 2.1.2导入写好的路由模块
const userRouter = require('./router/user.router')
const weatherRouter = require('./router/weather.router')
// 4.1导入koa-body
const {koaBody}=require('koa-body')
// 3.1解决跨域
const cors = require('koa2-cors')
// 3.2挂载跨域
app.use(cors())
// 4.2挂载koa-body
app.use(koaBody())


// 2.2注册挂载路由中间件
app.use(userRouter.routes())
app.use(weatherRouter.routes())

// 状态相关
app.use(userRouter.allowedMethods())

// 3.编写中间件

// 4.启动服务
app.listen(2000, () => {
    console.log('服务已启动 http://localhost:2000');
})
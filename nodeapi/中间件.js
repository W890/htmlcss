// 1.导入koa的包
const koa = require('koa')
// 2.实例化对象
const app = new koa()
// 3.编写中间件
app.use((ctx,next)=>{
    // console.log('我是头部');
    console.log(1);
    next()
    console.log(2);
})
.use((ctx,next)=>{
    // console.log('身体');
    console.log(3);
    next()
    console.log(4);
})
.use((ctx,next)=>{
    // console.log('组合完成');
    console.log(5);
    ctx.body = '你好小朋友fdgdf'
})
// 4.启动服务
app.listen(2000,()=>{
    // console.log(pkgccpejnmalmdinmhkkfafefagiiiad/json-format/index.html);
    console.log('服务已启动 http://localhost:2000');
})
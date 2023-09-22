// 2.1引入koa-router
const Router = require("koa-router");
// 实例化路由对象
const router = new Router({prefix:'/weather'});
// 引入axios
const axios = require('axios');

// 引入地区数据
const citydata = require('../data/data.json')
router.get('/list',async ctx=>{
    let {city} = ctx.query
    if (!city) return ctx.body = {code:201,msg:'地区不能为空'}
    // http://apis.juhe.cn/simpleWeather/query
    let {data} = await axios.get(`http://apis.juhe.cn/simpleWeather/query?city=${city}&key=ab57bfc3b4a05834e3888dd38303be43`)
    ctx.body = {
        code:200,
        data,
        citydata
    }
})
// 获取城市列表
router.get('/citylist',async ctx=>{
    ctx.body = {
        code:200,
        citydata
    }
})


// 导出路由模块
module.exports = router;

// 引入封装好的axios
import axios from "../utils/request";

// 导出定义请求接口
export const GetAppInfo = ()=>{
    return axios.request({
        // 请求地址
        url:'/index/appInfo',
        // 请求方式
        method:'get'
    })
}
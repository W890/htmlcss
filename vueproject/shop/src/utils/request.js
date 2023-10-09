import axios from "axios";

const instance = axios.create({
     // baseURL: 'http://localhost:8360/api',
     baseURL: 'http://192.168.0.88:8360/api',

     timeout: 6000,
     headers: { 'X-Custom-Header': 'foobar' }
});

// 添加响应拦截器
instance.interceptors.response.use( (response)=> {
     // 2xx 范围内的状态码都会触发该函数。
     // 对响应数据做点什么
     return response.data;
   },  (error)=> {
     // 超出 2xx 范围的状态码都会触发该函数。
     // 对响应错误做点什么
     return Promise.reject(error);
   });


export default instance
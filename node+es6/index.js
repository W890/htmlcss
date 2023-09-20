// 获取导出的内容 导入
const {n1,n2} = require('./ku/ajax.js')
const {name,name2} = require('./ku/npm.js')
console.log(n1,n2);
console.log(name,name2);

// 这是common.js方案

// 前端使用的是esm
let A1 = '456789'

// 导出
export default A1

// 接收
import a1 from a1

// 第二种写法·  
// export{
//     A1
// }
// import {A1} form '../bom'
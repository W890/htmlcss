// 扩展运算符
let arr = [1,2,3,4,5,6,7,8]

// 合并数组
let arr2 = ['y','r']
console.log([...arr,...arr2]);
console.log(...arr);

// 剩余参数
let obj = {
    name:'张三',
    age:15,
    jop:'花花',
    password:123456
}

function open({password,...data}){
    console.log(data);
}

// function open({...data}){
//     console.log(data);
// }
open(obj)


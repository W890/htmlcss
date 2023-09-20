// 变量
// 具有块级作用域，不能重复定义，没有变量提升
// let name = 123
// 常量
// 常量是不允许修改，具有块级作用域，不能重复定义
// 必须要初始化,定义时必须赋值
// const user = 456
// user = 789

// console.log(user);

// 解构赋值
// 对象的解构赋值
let obj = {
    name:'张三',
    age:15,
    job:{
        name:'小张三',
        age:65
    }
}

// let name = obj.name
// let age = obj.age
// let jobname = obj.job.name


// 解构赋值方案
// let {name,age} = obj
                        //起别名
let {name,age,job:{name:jobname}} = obj

// console.log();
console.log(name,age,jobname);

// 数组的解构方式
let foo = [1,2,3,4]
let [a,b,c,d] = foo
// 如果解构不成功，返回undefind
console.log(a,b,c,d);

// 字符串解构赋值
let str = 'hello'
let [x,y,z,h,o] = str
console.log(x,y,z,h,o);
let num = 123//number
let {toString:s} = num
console.log(s===Number.prototype.toString);

let type = true//Bool
let {toString:t} = type
console.log('t',t===Boolean.prototype.toString);

// 解构赋值设置默认值
function open({a,b}){
    console.log(a,b);
    console.log('48',a+b);
}

let data = {
    a:5,
    b:2
}
open(data)

// 例子
let aa = 1;
let bb = 2;

[aa,bb] = [bb,aa]
console.log(aa,bb);



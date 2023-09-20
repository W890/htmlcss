// 对象
let obj = {
    name:'张三',
    age:15,
}

let name = '李四'
let age = 15
// 对象简写：如果属性名和属性值一致可以只写一个
let obj2 = {
    name,
    age,
}
console.log(obj2);

function open(a,b){
    // return {a:a,b:b}
    return {a,b}
}
console.log(open(1,2));

// 对象属性表达式

let six = 'a'
let obj3 = {
    six:'哈哈哈'
    // [six]:'哈哈哈'
}
console.log(obj3);


function setcar(name) {
    return {
        [name+'lunzi']:()=>{
            console.log(name+'轮');
        },
        [name+'ke']:()=>{
            console.log(name+'壳');
        }
    }
}
console.log(setcar('byd'));
console.log(setcar('bba'));


// 比较方式
console.log(-0 === 0);
console.log(48,Object.is(-0,0));

console.log(parseInt('wyk')===parseInt('wyk'));
console.log(51,Object.is(parseInt('wyk'),parseInt('wyk')));


// 合并对象
let a = {
    name:'张三'
}
let b = {
    age:100
}

let c = {
    pass:'密码'
}
let d= {}
console.log(66,{...a,...b,...c});
// 把后面的对象合并到第一个对象中，合并对象时后面的同名属性会把前面的同名属性覆盖
console.log(68,Object.assign(d,a,b,c));
console.log(69,d);
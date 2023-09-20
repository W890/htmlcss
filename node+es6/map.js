//map

let obj = {
    name:'default',

}
let m  = new Map()
// 添加
m.set('name','张三')
// 可以使用对象作为键名
let o = {name:'地区'}
m.set(o,'青岛')

console.log(m);

// 获取get
console.log(m.get('name'));
// 获取键名
console.log(m.keys());
// console.log(m.get({name:'地区'}));
// 判断是否存在
console.log(m.has('name1'));
// 删除
m.set('age',15)
console.log(m);
m.delete('age')
console.log(m);

// 清空
m.clear()
console.log(m);
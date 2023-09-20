// set数据结构
// 类似数组，但成员唯一
let s = new Set([1,2,3,4,5,5,6,6,4])
console.log(4,s);

// 添加add
let ss = new Set()
let arr = [1,2,3,4,5,5,5,6,7,5,49,4]
arr.map(item=>ss.add(item))
ss.add(1)
console.log(11,ss);
// 删除方法
ss.delete(5)
console.log(14,ss);
// 判断是否存在
console.log(16,ss.has(5));

// set也拥有forEach方法， 进行遍历
ss.forEach(i=>{
    console.log(22,i);
})
 
console.log([...ss].filter(x=>x>4));



// 清空
// ss.clear()
// console.log(ss);

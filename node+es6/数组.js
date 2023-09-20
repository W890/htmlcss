// 数组的操作方法
// of:将一组数值转换为数组
console.log('第三行',Array.of(2,3,4,5));

let arr = [0,1,2,3,4]
// 将数组内部指定位置的数据替换
// copyWithin(参数1，参数2，参数3)
// 参数1：从该位置替换
// 参数2：从该位置读取
// 参数3：从该位置停止读取，如果为空，默认数组的长度，如果是负值表示倒数
console.log('第11行',arr.copyWithin(0,3,4));

// 查找数组中符合条件的项
let arr2 = [1,2,3,4,5]
// find() 找到符合条件的第一项，他是一个回调函数的形式
let item = arr2.find((item)=>{
    return item>3
})
//let item = arr2.find(item=>item>3)//简写

// findIndex,找到符合条件的第一项的下标，他是一个回调函数的形式，如果找不到符合条件的项，返回-1
let itemindex = arr2.findIndex((item)=>{
    return item>3
})

arr2.forEach(item=>{
    if(item===3){
        return false;
    }
    console.log(item);
})
// some可以停止遍历
arr2.some(item=>{
    if(item===3){
        return true;
    }
    console.log('---',item);
})

// 遍历，并得到一个新的数组
let arrnew = arr2.map(item=>{
    return item+'map'
})
console.log(arrnew);

console.log('item:',item); 
console.log('itemindex',itemindex);

// 将符合条件的数组项放到新的数组中
let newarr = arr2.filter(item=>{
    return item>2
})
console.log('arr2',arr2);
console.log('newarr',newarr);


// 数组填充 fill常用于初始化，有三个值
// 参数一：填充的值
// 参数2:起始位置
// 参数3：结束位置
let arr3 = [1,2,3]
arr3.fill(7,2,3)
console.log('arr3',arr3);

// keys()获取索引
// console.log(arr3.keys());
for(let x of arr3.keys()){
    console.log('下标',x);
}

// values()获取值
// console.log(arr3.values());
for(let x of arr3.values()){
    console.log('值',x);
}
// entries()获取索引和值
// console.log(arr3.entries());
for(let [key,val] of arr3.entries()){
    console.log('下标和值',key,val);
}
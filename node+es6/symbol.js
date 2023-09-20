// es6引入新的基本数据类型 symbol 表示独一无二的值
let obj = {
    [Symbol('pass')]:'456',
    [Symbol('pass')]:function(params){
        console.log(123);
    }
}
console.log(obj);
console.log(Symbol('pass') == Symbol('pass'));

let name = Symbol('name')
let age = Symbol('name')
let pass = Symbol('name')

let obj2 = {
    [name]:'张三',
    [age]:'15',
    [pass]:'哈哈'
}
console.log(485);
console.log(obj2);

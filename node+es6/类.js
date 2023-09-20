function Open(name,age) {
    this.name = name
    this.age = age
}

Open.prototype.set = function(){
    console.log(7,this.name);
}

let obj =new Open('张三',15)
let obj1 = new Open('李四',15)
obj.set()
obj1.set()
console.log(obj);

// 类
class Open2 {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    set(){
        console.log(this.name);
    }
}
let open2 = new Open2('王五',60)
console.log(27,open2);
console.log('obj',obj.__proto__);
console.log('class',open2.__proto__);

// 创建子类
// 子类通过extends继承父类  
class Size extends Open2 {
    constructor(name,age){
        // 通过super调用父类中的构造函数 必写
        super(name,age)
    }
    // 调用父类中的方法
    size(){
        console.log('我是子类');
        super.set()
    }
}

let open3 = new Size('赵六',50)
console.log('open3',open3);
open3.size()
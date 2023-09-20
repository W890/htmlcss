console.log(0.1+0.2);

let num = 0.1+0.2-0.3
console.log('第4行',num);

// 极小常量，如果误差小于Number.EPSILON，认为结果是正确的
console.log(Number.EPSILON);

console.log(num<Number.EPSILON);
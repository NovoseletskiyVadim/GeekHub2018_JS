// task1 
var result1=function id(x) {
    return x;
}

console.log("задание 1. Вернет :"+result1(true));

// task2
var result2=function reflexive(x) {
    return x != x;
}
console.log("задание 2. Вернет :"+result2(NaN));

// task3
var result3=function infinity(x, y) {
    return x === y && 1/x < 1/y 
}

console.log("задание 3. Вернет :"+result3());

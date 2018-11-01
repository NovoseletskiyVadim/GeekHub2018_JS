
Number.prototype.mySum = function(y) {
    return this.valueOf()+y;
};

var x=5;
var y=15;

var c=Number(x).mySum(y);
var d=x.mySum(y);
console.log("Результат. Вариант 1= ", c);
console.log("Результат. Вариант 2= ", d);
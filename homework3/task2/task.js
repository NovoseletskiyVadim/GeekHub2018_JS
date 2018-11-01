

function id(x) {
    return x;
}
console.log("Результат задания 1=", id(true));





function reflexive(x) {
    return x != x;
}
console.log("Результат задания 2=", reflexive(NaN));




function infinity(x, y) {
    // return x === y && 1/x < 1/y 
    return 1/x===1/y;
}
console.log("Результат задания 3=", infinity(0,0));



function transitive(x,y,z) {
    return x && x == y && y == z && x != z;
}
console.log("Результат задания 4=", transitive());




function counter(f) {
    var a = f(), b = f();
    return a() == 1 && a() == 2 && a() == 3
        && b() == 1 && b() == 2;
}
console.log("Результат задания 5=", counter(NaN));


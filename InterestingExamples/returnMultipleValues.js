

// prolem
var newCodes = function() {  
    var dCodes = fg.codecsCodes.rs;
    var dCodes2 = fg.codecsCodes2.rs;
    return dCodes, dCodes2;
};

// solution

// variant 1
var newCodes = function() {
    var dCodes = fg.codecsCodes.rs;
    var dCodes2 = fg.codecsCodes2.rs;
    return [dCodes, dCodes2];
};

var codes = newCodes();
var dCodes = codes[0];
var dCodes2 = codes[1];

// variant 2

var newCodes = function() {
    var dCodes = fg.codecsCodes.rs;
    var dCodes2 = fg.codecsCodes2.rs;
    return {
        dCodes: dCodes,
        dCodes2: dCodes2
    };
};

var codes = newCodes();
var dCodes = codes.dCodes;
var dCodes2 = codes.dCodes2;


/*
    Вы можете сделать это с Javascript 1.7 с помощью "destructuring assignments". 
    Обратите внимание, что они недоступны в старых версиях Javascript (что означает 
    - ни с ECMAScript 3rd, ни с 5-ю изданиями).
    Он позволяет одновременно назначать переменные 1+:

*/ 

var [x, y] = [1, 2];
x; // 1
y; // 2

// or

[x, y] = (function(){ return [3, 4]; })();
x; // 3
y; // 4


/*Вы также можете использовать деструктурирование объекта в сочетании со стенографией значения 
свойства, чтобы указать возвращаемые значения в объекте и выбрать нужные вам объекты:*/ 

let {baz, foo} = (function(){ return {foo: 3, bar: 500, baz: 40} })();
baz; // 40
foo; // 3
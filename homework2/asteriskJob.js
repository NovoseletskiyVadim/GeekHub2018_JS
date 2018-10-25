

//анализ работы конструктора new Array();

console.warn("стандартный new Array(). Вариант 1 Один аргумент:new Array(5)");
// вариант 1:
//  передам в конструктор только одно значение=5 и конструктор 
// позварашает нам массив размерностью 5 ячеек.

// создал массив на 5 єлементов ;
var myArray=new Array(5);

// проверяем и инициализируем сразу
for(var i=0; i<myArray.length;i++){
    myArray[i]=i;    
}

console.log("размерность массива :"+myArray.length);
for (var key in myArray){
    console.log(myArray[key]);
};
console.log("\n\n\n");

console.warn("стандартный new Array(). Вариант 2 Два аргумента:new Array(5,10)");
// вариант 2 
//  передам в конструктор только одно  нескольео значений и конструктор 
// возварашает нам массив размерностью=(количество аргументов>1).
var myArray1=new Array(5,10);
for(var i=0; i<myArray1.length; i++){
    console.log(myArray1[i]);
};

// мое решение

console.warn("Решение:");
console.log("\n\n\n")

function newMyArray(){
    if(arguments.length>1){
        var newArray=[];
        for(var i=0;i<arguments.length;i++){
            newArray[i]=arguments[i];
        }
        return newArray;
    }
    else{
        var myArgVAL=arguments[0];
        // console.log("arguments[0]"+myArgVAL);
        if(myArgVAL>=1){
            var newArray=[];
            var mySize=0;
            for(var y=0;y<myArgVAL;y++){
                newArray[y]=undefined;
               
            }
            return newArray;
        }
        else{
            var newArray=[];
            return newArray;
        };
    };
};


console.warn("мой вариант new newMyArray(). Вариант 1 Один аргумент:new newMyArray(5)");
var myArray2=new newMyArray(5);
console.log("размерность массива :"+myArray2.length);

for(var i=0; i<myArray2.length;i++){
    myArray2[i]=i;    
}

for (var key in myArray2){
    console.log(myArray2[key]);
};

console.log("\n\n\n");

console.warn("мой вариант new newMyArray(). Вариант 2 Два аргумента:new newMyArray(5,10)");

var myArray3=new newMyArray(5,10);
for(var i=0; i<myArray3.length; i++){
    console.log(myArray3[i]);
};




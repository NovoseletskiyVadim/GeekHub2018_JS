
//Add associative array
console.log("Начало работы с Ассоциатвным массивом");
var associativeArrayMobileTel={
    ['phone brand']:'nokia',
    ['model']:3310,
    ['color']:'black',
    ['year of issue']:2010,
    ['start price']:100
};
console.log('Создание ассоциативного массива и вывод его  значений '+
associativeArrayMobileTel.toString());

// check array
if(associativeArrayMobileTel==null){
    console.error("Ошибка:Массив не создан!!");
}
else{
    for(var i in associativeArrayMobileTel){
        console.log("Ключ= "+i+"; Значение= "+ associativeArrayMobileTel[i]);
    }
}

// implementation of methods

// Add method "push"

// associativeArrayMobileTel['key'].push('value');
// var newValue={'myKey':'myValue'};
// associativeArrayMobileTel.push("37637643","jdhfjdhfjdfh");

console.warn("Добавдение метода аналог. push. Начало работы.");

var associativeArrayMobileTel={
    ['phone brand']:'nokia',
    ['model']:3310,
    ['color']:'black',
    ['year of issue']:2010,
    ['start price']:100,

    myPush:function(myKey,myValue){
        if(myKey==null||myKey==undefined){
                console.error("Error:отсутствует ключ!!");
        }
        else if(myValue==null||myValue==undefined){
            console.error("Error:отсутствует значение  ключа!!");            
        } 
        else{
            return this[myKey]=myValue;  

        }
    }
};
associativeArrayMobileTel.myPush('la la la',12);
for(var i in associativeArrayMobileTel){
    console.log("Ключ= "+i+"; Значение= "+ associativeArrayMobileTel[i]);
}







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

// implementation of methods;
console.warn("Добавдение метода аналог. push. Начало работы.");

    var myObj={
        // add create method;
        myObjCreateProperties:function(numberOfKeys){
            for(var i=1;i<=numberOfKeys;i++){
                this[i]=undefined;
            };
            console.warn("Создан обьект на "+(i-1)+" свойства")
            return this;
        },
        
        // add display method;
        myDisplay:function(){
            console.warn("вывод обьекта:");
            for(var myKey in this){
                if(parseInt(myKey)){
                console.log("Ключ= "+myKey+"; Значение= "+ this[myKey]);                    
                }
            };
            return this;
        },

        //add push method
        myObjPush:function(newValue){
            var newKey=undefined;
            for(var key in this){
                if(parseInt(key)){
                     newKey=parseInt(key)+1; 
                };
            };
            if(newKey && newValue){
                console.warn("Добавлено "+newKey+" -е свойство ");
                return this[newKey]=newValue;
            }
            else{console.error("MyError:Не добавлено значение ключа!!")};
        },

        // add pop method
        myObjPop:function(){
            var lastKey=undefined;
            for(var key in this){
                if(parseInt(key)){
                    lastKey=parseInt(key); 
                };
            };
            if(lastKey){
                delete this[lastKey];
                console.warn("Последнее свойство удалено!!")
            }
            return this;
        }
    };
    myObj.myObjCreateProperties(2);
    myObj.myDisplay();
    myObj.myObjPush(888);
    myObj.myDisplay();
    myObj.myObjPop();
    myObj.myDisplay();


   

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
        },
        // add join method;
        myObjJoin:function(mySeparator){
                var viewSeparator=mySeparator+"";
                var myJoin="";
                console.log("Работа метода \"join\": ");
            for(var key in this){
                if(parseInt(key)){
                    myJoin+=this[key]+viewSeparator;                      
                }
            };
            if(myJoin){
                console.log("Результат работы метода \"join\" строка с разделителем: "+ myJoin);                
            }
            else{
                console.error("MyERROR!!");
            };
            return this;
        },

        // add filter method;
        myObjFilterSummer:function(){
            console.log("Найдем и выведем все летние месяцы с помощью метода find : ");
            var myFilter="";
           
            for(var key in this){
                if(parseInt(key)){
                    if(this[key]==='июнь'||this[key]==='июль'||this[key]==='август'){
                        myFilter+=this[key]+" ; ";
                    };
                };
            };
            if(myFilter){
                console.warn("Результат работы метода \"myFilterSummer\" :"+ myFilter);                
            }
            else{
                console.error("MyERROR!!");
            };
            return this;
        },
        //add find method;
        myObjFind:function(inValueFind){
            var outValueFind=undefined;
            for(key in this){
                if(parseInt(key)){
                    if(this[key]===inValueFind){
                        outValueFind=this[key];
                        break;
                    };
                };
            };

            if(outValueFind){
                console.warn("Результат работы метода \"find\" : "+outValueFind)
            }
            else{
                console.error("MyError!!")
            };

            return this;
        }


    };
    myObj.myObjCreateProperties(2);
    myObj.myDisplay();
    myObj.myObjPush('июнь');
    myObj.myObjPush('июль');
    myObj.myObjPush('август');
    myObj.myObjPush('июнь');
    myObj.myObjPush('сентябрь');
    myObj.myObjPush('октябрь');
    myObj.myObjPush('ноябрь');
    myObj.myObjPush('декабрь');
    myObj.myDisplay();
    myObj.myObjPop();
    myObj.myDisplay();
    myObj.myObjJoin('/');
    myObj.myObjFilterSummer();
    myObj.myObjFind('июнь');



   
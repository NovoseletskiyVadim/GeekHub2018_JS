
//Add associative array
console.log("Начало работы с Ассоциатвным массивом");
var associativeArrayMobileTel={
    ['phone brand']:'nokia',
    ['model']:3310,
    ['color']:'black',
    ['year of issue']:2010,
    ['start price']:100,

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
console.warn("Добавдение методов.  Начало работы.");

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
        },




        myObjMap:function(){
            console.warn("Старт работы метода \"myObjMap\"");
             var myArray=[];//временный массив 
             var countMyArray=0;//размер временного массива

             //запись значений во временный массив myArray
             for(var key in this){
                if(parseInt(key)){
                    if(this[key]==='июнь'||this[key]==='июль'||this[key]==='август'){
                        myArray.push(this[key]);
                    };
 
                };
             };

             countMyArray=myArray.length;   

            /*создадим конструктор для нового обьекта, который для своих свойств
            выберет только летние месяцы из временного масива так сказать родительского  обьекта*/ 

            function returnNewObj(countMyArray, myArray){

                var inMyArray=myArray;
                console.log("вывод  массива выбранных значений для нового обьекта");
                console.log(inMyArray.forEach(element => {
                    console.log(element);
                }));

                for(var i=1;i<=countMyArray;i++){
                    this[i]=inMyArray.shift();
                };
                console.warn("Создан новый обьект на "+(i-1)+" свойства");
                
                //метод вывода содержимого свойств этого обьекта
                this.getMyInfo=function(){
                    console.warn("Вывод свойств нового обьекта после метода map");
                    for(var key in this){
                        
                        if(parseInt(key)){
                            console.log("ключ: [ "+key+"] Свойство : "+ this[key]);
                        };
                    };
                };
            };
            var myResult=undefined;
            // результат работы метода, возврашает новый обьект
            myResult=new returnNewObj(countMyArray,myArray);
            if(myResult) return myResult
            else console.error("myERROR: новый обьект не создан!!!");  
        },
    };

    
    myObj.myObjCreateProperties(2);//Создание обьекта на 2 свойства
    myObj.myDisplay(); // вывод результата

    myObj.myObjPush('июнь');//работа метода push
    myObj.myObjPush('июль');
    myObj.myObjPush('август');
    myObj.myObjPush('июнь');
    myObj.myObjPush('сентябрь');
    myObj.myObjPush('октябрь');
    myObj.myObjPush('ноябрь');
    myObj.myObjPush('декабрь');

    myObj.myDisplay();// вывод результата работы метода push

    myObj.myObjPop();// работа метода pop

    myObj.myDisplay();// вывод результата

    myObj.myObjJoin('/');// работа метода join

    myObj.myObjFilterSummer();// работа метода filter

    myObj.myObjFind('июнь');// работа метода find



    //  работа метода map
    var outPutNewObject=myObj.myObjMap();
    // результат работы метода map
    outPutNewObject.getMyInfo();




    // Пример использования метода сортировки Sort

        // создадим конструктор для нового обьекта
    function CreateNewObjForMethodSort(quantityProperties){

        // функция которая возвращает рандомные значения
        function myRandomValue(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        };

        // создание и инициализация свойств нового обьекта
        for(var i=1;i<=quantityProperties;i++){
            this[i]=myRandomValue(1,100);
        };

        console.warn("Создан обьект на "+(i-1)+" свойств, для метода Sort \n и проинициализирован случайными значениями");
        
        // метод вывода ключей и значений обьекта
        this.displayInfo=function(){
            console.warn("Вывод свойств обьекта и значений обьекта:");
            for(var key in this){
                if(parseInt(key))console.log("ключ : ["+key+"] ; Значение : "+this[key]);
            };
            console.log("\n\n\n\n");
        };

        // метод пузырьковой сортировки  по возрастанию
        this.myBubbleSort=function(){
            console.warn(" После сортировки пузырьком:");
            for (var key in this){
                if(parseInt(key)){
                    for(var a=1; a<quantityProperties;a++){

                        for(var b=0; b<=quantityProperties-1;b++){
                            if (this[b]>this[b+1]){
                                var mySortValue=this[b];
                                this[b]=this[b+1];
                                this[b+1]=mySortValue;
                            };
                        };
                    };
                };
            };
        };
    };

    var ObjForMethodSort=new CreateNewObjForMethodSort(100);//создание обьекта на 100 свойств
    ObjForMethodSort.displayInfo();//вывод информации о ключах и свойствах обьекта 
    ObjForMethodSort.myBubbleSort();//приминение пузырьковой сортировки 
    ObjForMethodSort.displayInfo();//вывод обновленной информации о ключах и отсортирован.свойствах

    
    
    

    // пример с toString();

    function monthNow(myMonth, myYear){
        this.myMonth=myMonth;
        this.myYear=myYear;
    };
    // создадим обьект 
    var myTime=new monthNow('october',2018);
    // стандартный метод toString()  выведет
    console.warn("стандартный метод toString()  выведет:", myTime.toString());
    // переопределим стандартный  метод toString() для всех обьектов monthNow
    console.log("переопределим стандартный метод toString() для всех обьектов monthNow........")
    monthNow.prototype.toString=function(){
        return "На дворе стоял месяц :"+this.myMonth+" Заканчивался :"+this.myYear+" год";
    }
    console.warn("переопределенный  метод toString()  выведет:", myTime.toString()+"\n\n\n");

   
   
   
   
   
    // пример с геттерами и сеттерами 
    console.warn("Работа с геттерами и сеттерами:")
    function Cinema(name){
        this.Name=name;
        // set
        this.setAge=function(inAge){
            if(inAge<18){
                // генерим новую ошибку
                throw new Error("Фильм для возрастной категории больше 18 лет");
            }
            Age=inAge;
        };
        //get
        this.Age=()=>{
            return Age;
        };
    };

    var Ukraine=new Cinema('Nikolai');
    console.log("Имя посетителя :"+ Ukraine.Name);

    // при попытке записать в свойство значение меньше 18 ошибка
    // таким образом мы можем защить свойство обьекта от записи в него случайного значения. 
    Ukraine.setAge(19);
    console.log("Возраст посетителя :"+ Ukraine.Age());
    console.log("\n\n\n\n\n")


    

    
    // геттер length
    console.warn(" Работа со свойством length:")
    function CreateNewMyObj(quatityElements){
        // проиницыализируем наш массив
        for(var i=1; i<=quatityElements;i++){
            this[i]=i+100;
            console.log("Создали обьект на :"+i+" свойств");
            
        }
        // свойство length
        this.mylength=(()=>{
            var y=0;
            for(key in this){
                if(parseInt(key)){
                    ++y;
                }
            }
            return mylength=y;
        })();
    };

    var LengthObj=new CreateNewMyObj(10);
    
    console.warn("Свойство length вывело  значение : "+ LengthObj.mylength );













   
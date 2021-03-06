
/*
    1.При запуске функция создает объект LexicalEnvironment,
     записывает туда аргументы, функции и переменные. 
     Процесс инициализации выполняется в том же порядке, 
     что и для глобального объекта, который, вообще говоря,
      является частным случаем лексического окружения.

*/ 

/*
    2.При создании функция получает скрытое свойство [[Scope]], 
    рое ссылается на лексическое окружение, в котором она
     была создана.
*/ 

   

/*
   3. При поиске переменных он осуществляется сначала в текущем объекте
     переменных, а потом – по этой ссылке.
*/ 

var phrase='Hello';
function say(){
    function go(){
        console.log(phrase);
    }    
    go();
}
say();

/* 4.Значение переменной из внешней области берётся всегда текущее.*/ 

function makeCounter(){
    var currentCount=1;

     return function(){
        return currentCount++;
    }
}
var myCounter=makeCounter();
console.log(myCounter());
console.log(myCounter());


var myCounter1=makeCounter();
console.log(myCounter1());
// внешняя переменная currentCount,  у каждого счётчика своя.


/*
    «Понимать замыкания» в JavaScript означает понимать следующие вещи:

    1.Все переменные и параметры функций являются свойствами объекта переменных 
    LexicalEnvironment. Каждый запуск функции создает новый такой объект. 
    На верхнем уровне им является «глобальный объект», в браузере – window.

    2.При создании функция получает системное свойство [[Scope]], которое ссылается 
    на LexicalEnvironment, в котором она была создана.

    3.При вызове функции, куда бы её ни передали в коде – она будет искать переменные
     сначала у себя, а затем во внешних LexicalEnvironment с места своего «рождения».


*/ 

// Чтобы добавить счётчику возможностей – перейдём с функции на полноценный объект:
// variant 1
function makeCounter(){
    var currentCount=1;

    // возвратим обьект вместо функции
    return{
        getNext:function(){
            return currentCount++;
        },

        set:function(value){
            currentCount=value;
        },

        reset:function(){
            currentCount=1;
        }
    };
}

/*
    Все они получают ссылку [[Scope]] на текущий (внешний) объект переменных.
    Поэтому вызов любого из этих методов будет получать или модифицировать одно
    и то же внешнее значение currentCount.
     
*/ 

// variant 2 
function makeCounter(){
    var currentCount=1;

    function counter(){
        return currentCount++;
    }
    // доьавляем методы
    counter.set=function(value){
        currentCount=value;
    }

    counter.reset=function(){
        currentCount=1;
    }
}

var counter=makeCounter();
console.log(counter());
console.log(counter());
counter.set(5);

// variant 3

function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(5)(6));
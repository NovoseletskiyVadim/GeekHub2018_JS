//Методы Массива


//add new array
var myMonth=new Array("июнь","июль","август");
console.log("Исходный массив:",myMonth);

//add method "push"
myMonth.push("сентябрь","октябрь","ноябрь");
console.log("работа метода \"push\":",myMonth);

//add method "unshift"
myMonth.unshift("март","апрель","май");
console.log("работа метода \"unshift\":",myMonth);


//add method "pop"
var lastDeleteElemetArray_myMonth =myMonth.pop();
console.log("работа метода \"pop\":")
console.log("последний удаленный ел.массива:", lastDeleteElemetArray_myMonth);
console.log("Исходный массив:",myMonth);

//add method "shift"
var firstDeleteElemetArray_myMonth =myMonth.shift();
console.log("работа метода \"shift\":")
console.log("первый  удаленный ел.массива:", firstDeleteElemetArray_myMonth);
console.log("Исходный массив:",myMonth);

//add method "join"
var myJoin=myMonth.join("-");
console.log("работа метода \"Join\":",myJoin);


//add method "concat"
var myConcat=myMonth.concat("декабрь");
console.log("работа метода(конкатенация 1 го значения\"декабрь\" ):",myConcat);
console.log("работа метода(конкатенация массивов ):");
var myArray_1=new Array("март");
var myArray_2=new Array("апрель");
console.log(" создаем 2 массива"+"Array_1: ", myArray_1 ," и myArray_2: ",myArray_2);
var myConcat_1=myArray_1.concat(myArray_2);
console.log("работа метода(конкатенация двух массивов ):",myConcat_1);

//add method "forEach"
var myNumber=new Array(6,3,7,8,1,3,9,4,12,10,6,28,20,15)
console.log("работа метода \"forEach\"",myNumber);

//add method "split"
var str='Июнь,Июль,Август';
console.log("Вывод строки",str);
console.log("работа метода 'split'");
var myArray=str.split(',');
for(var i=0;i<myArray.length;i++){
    console.log("Вывод",i+1,"-го елемента массива. Значение:",myArray[i]);
}

//add method "slice"
console.log("работа метода 'slice'")
console.log("исходный массив:")
var myMonthForSlice=['март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']
for(var i=0;i<myMonthForSlice.length;i++){
    console.log("Вывод",i+1,"-го елемента массива. Значение:",myMonthForSlice[i]);
}
console.log("лето состоит из 3 х месяцев :",myMonthForSlice.slice(3,6));

//add method "splice" variant 1
console.log("работа метода 'splice'");
console.log("исходный массив:");
var myMonthForSplice=['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
for(var i=0;i<myMonthForSlice.length;i++){
    console.log("Вывод",i+1,"-го елемента массива. Значение:",myMonthForSplice[i]);
};
console.log("вот и пролетело время...",myMonthForSplice.splice(0,9));
console.log("осталось до конца года ..:", myMonthForSplice);

//add method "splice" variant 1
console.log("работа метода 'splice' - variant 2");
var period=['июнь','июль','август'];
console.log("исходный массив:");
console.log(period);
console.log("splice заменил елементы массива на новые");
period.splice(0,3, 'сентябрь','октябрь','ноябрь');
console.log(period);

//add method "indexOf"
console.log("Работа метода \"indexOf\"");
var indexOfMyMonth=['июнь','июль','август'];
console.log("Исходный массив:", indexOfMyMonth);
for (let index = 0; index < indexOfMyMonth.length; index++) {
    console.log("елемент с индексом ["+index+"]"+indexOfMyMonth[index]);   
}
console.log("находим индекс  елемента со значением\"август\" он равен:",indexOfMyMonth.indexOf("август"));




//add method "filter"
console.log("Работа метода \"filter\"");
//create Array
var filtermyMonth=[19,4,6,true,'сентябрь','июнь',false,'октябрь',3,'август',10,'ноябрь','июль'];
console.log("Вывод исходного массива:")
for(let i=0;i<filtermyMonth.length;i++){
    console.log("индекс массива:"+i+" значение="+filtermyMonth[i]);
}
// assign the result of the function(new array) to a variable "mySummer"
var mySummer=filtermyMonth.filter(
    function(mySummer){
        return mySummer==="июнь"||mySummer==="июль"||mySummer==="август";  
    }
);
// function result 
console.log("Результат работы иетода \"filter\"",mySummer);
for(let i=0;i<mySummer.length;i++){
    console.log("индекс массива:"+i+" значение="+mySummer[i]);
};


//Add method "Map"
/*
    map очень похожа на filter. В аргумент она принимает callback функцию,
    которая будет работать с каждым элементом в массиве. Но вот тут и 
    начинается различие. filter ждёт, когда функция вернёт истину или ложь,
    и уже если функция возвращает истину - добавит элемент в массив. map же
    принимает все значения массива в новый массив. но мы можем производить над ними 
    любые преобразования внутри нашей callback функции.

*/ 
console.log("Начало работы метода \"Map\"")
var mySummerMonth=[
    {
        month:'июнь',
        temperatureOfMonth:28,
        days:30
    },
    {
        month:'июль',
        temperatureOfMonth:35,
        days:31
    },

    {
        month:'август',
        temperatureOfMonth:24,
        days:30
    }
];
console.log("Исходный массив обьектов:")

mySummerMonth.forEach(element => {
      console.log(element);
});

/*используя функцию map, преобразует массив обьектов
в новый массив состояший только из названий месяцев*/

console.log("функция map,преобразует массив обьектов и  выведе новый массив из названий месяцев  ")

var nameSummerMonth=mySummerMonth.map(
    function(nameMonth){
        return nameMonth.month;
    }
);
//вывод массива на консоль
nameSummerMonth.forEach(element=>{
    console.log(element);
});

// или 
console.log("или")
var nameSummerAndDays=mySummerMonth.map(
    function(allOjectParameters){
        return allOjectParameters.month+", количество дней:"+allOjectParameters.days+
        " средняя температура за месяц: +"+allOjectParameters.temperatureOfMonth
    }
);

nameSummerAndDays.forEach(element=>{
    console.log(element);
});
console.log("или выведем так)")
for(let i=0;i<nameSummerAndDays.length;i++){
    console.log("[",i,"]"+"значение:",nameSummerAndDays[i]);
}







































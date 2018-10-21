
//Add associative array
console.log("Начало работы с Ассоциатвным массивом");
var associativeArrayMobileTel={
    ['phone brand']:'nokia',
    ['model']:3310,
    ['color']:'black',
    ['year of issue']:2010,
    ['start price']:100
};
console.log('Создание ассоциативного массива и вывод его  значений ');
console.log(associativeArrayMobileTel.toString());
if(associativeArrayMobileTel==null){
    console.error("Ошибка:Массив не создан!!");
}
else{
    for(var i in associativeArrayMobileTel){
        console.log("Ключ= "+i+"; Значение= "+ associativeArrayMobileTel[i]);
    }
}






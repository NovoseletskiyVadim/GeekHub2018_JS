
// проверка . подсоедннился ли модуль
console.log('greeting module is connect!!!');


// Объект module.exports - это то, что возвращает
//  функция require() при получении модуля.
let currentDate=new Date();
module.exports.date=currentDate;

/*объект module представляет ссылку на текущий модуль,
 а его свойство exports определяет все свойства и методы 
 модуля, которые могут
 быть экспортированы и использованы в других модулях*/ 

module.exports.getMessage=function(name){

    let hour=currentDate.getHours();

    if(hour>16){
        return "Добрый вечер "+name;
    }
    else if(hour>10){
        return "добрый день "+ name;
    }
    else{
        return "Доброе утро "+ name;
    }


}

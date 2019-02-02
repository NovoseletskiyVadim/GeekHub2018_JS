// события 

// Весь необходимый функционал сосредоточен в модуле events

const Emitter=require('events');

let emitter=new Emitter();

let eventName='greet';

// С помощью функции on() связываем событие, которое передается 
// в качестве первого параметра, с некоторой функцией, которая
//  передается в качестве второго параметра

emitter.on(eventName, function(){
    console.log("Hello")
});

emitter.on(eventName, function(){
    console.log("Hello all!");
});

// передача параметров событию
emitter.on(eventName, function(data){
    console.log("Hello "+data);
});



// Для генерации события и вызова связанных с ним обработчиков выполняется 
// функция emitter.emit(), в которое передается название события.
emitter.emit(eventName,'Vadim');

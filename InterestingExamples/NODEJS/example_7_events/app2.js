
// наследование 

/*В приложении мы можем оперировать сложными объектами,
 для которых также можно определять события, но для этого 
 их надо связать с объектом EventEmitter.*/ 


const util=require('util');
const EventEmitter=require('events');

let eventName="greet";

function User(){

}

// чтобы связать объект User с EventEmitter, надо вызвать функцию
// Она позволяет унаследовать классу User функционал от EventEmitter.

/*
    Благодаря этому мы можем через метод on() добавить к событию объекта
     user какой-нибудь обработчик, который будет вызван при выполнении метода 
     user.sayHi().

*/ 
util.inherits(User, EventEmitter);


// для прототипа User в методе sayUser генерруем событие greet
User.prototype.sayUser=function(data){
    this.emit(eventName, data);
}

let user=new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName,function(data){
    console.log(data);
});

user.sayUser("КУ КУ");



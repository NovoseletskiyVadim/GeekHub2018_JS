// но теперь не нужно использовать функцию util.inherits.


const EventEmitter = require("events");
  
let eventName = "greet";
 
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}
 
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});
  
user.sayHi("Мне нужна твоя одежда...");

const http=require('http');

const os=require('os');
const greeting=require('./greeting');

const User=require('./user')



// получим имятекущего пользлвателя
let userName=os.userInfo().userName;

console.warn('userName=',userName);

// выводим результат в консоль 
// console.log(``)
console.log(`Дата запроса: ${greeting.date}`);
console.log(`вывод результата функ: ${greeting.getMessage(userName)}`);


let user1=new User.User('Vadim', 32);

user1.sayHi();





// http.createServer(function(request,response){



// }).listen(3000,'127.0.0.1', function(){

//     console.log("Сервер начал работать на 3000 порту ")

// });


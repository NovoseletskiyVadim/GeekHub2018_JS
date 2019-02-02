
// 1. загружаем модуль http
const http=require('http');

// 2 создаем новый сервер
http.createServer(function(request, response){

     response.end("Hello from Server!!");

    // 3 Чтобы сервер начал прослушивать входящие подключения у него надо вызвать метод listen
}).listen(3000,'127.0.0.1',function(){

    console.log("Сервер начал прослушивание запросов на 3000 порту");

});

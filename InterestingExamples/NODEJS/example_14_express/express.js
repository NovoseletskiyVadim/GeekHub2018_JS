
/*
        И что важно, Express опирается на систему маршрутов, поэтому 
        все другие запросы, которые не соответствуют корневому 
        маршруту "/", не будут обрабатываться
*/ 


const express=require('express');

// создаем обьект приложения
const server=express();

// конвеер обработки запросов:

// определяем обработчик для маршрута "/"

server.get("/", function(request, response){

    // отпраляеим ответ
    response.send("<h2>Привет express</h2>");

});
// еще маршруты 
server.get("/main", function(request, response){

    response.send("<h2> Главная страница+</h2>")
});

server.get("/about", function(request,response){

    response.send("<h2>О нас</h2>")

})

server.listen(3000);
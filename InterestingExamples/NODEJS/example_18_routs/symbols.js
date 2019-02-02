
/*символ ? указывает, что предыдущий символ может 
встречаться 1 раз или отсутствовать*/ 
app.get("/bo?k", function (request, response) {
    response.send(request.url)
});


/* + указывает, что предыдущий символ может встречаться 1 и более раз*/ 
app.get("/bo+k", function (request, response) {
    response.send(request.url)
});


/* звездочка * указывает, что на месте данного символа
 может находиться любое количество символов*/

app.get("/bo*k", function (request, response) {
    response.send(request.url)
});


/*
    Скобки () позволяют оформить группу символов,
    которые могут встречаться в запросе
*/ 

/*
    Выражение (.html)? указывает, что подстрока ".html" может 
    встречаться или отсутствовать в строке запроса. 
    И такой маршрут будет соответствовать запросам "/book" и "/book.html".
*/  

app.get("/book(.html)?", function (request, response) {
    response.send(request.url)
});

/*

Также вместо определения маршрутов мы можем указывать регулярные выражения.
*/ 

app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url)
});
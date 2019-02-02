
// создание сервера 

const http=require('http');

http.createServer(

    // функция для обработки подключений 
    function(request, response){

        // представляет объект http.IncomingMessage

        console.log("Url= "+ request.url);
        console.log("Тип запроса= "+request.method);
        console.log("User-agent= "+request.headers['user-agent']);
        console.log("Все заголовки");
        console.log(request.headers);


        response.setHeader('UserId',12);
        response.setHeader('Content-Type','text/html; charset=utf-8');
        response.write('<h2> hello word </h2>')

        response.end();

    }



).listen(3000);


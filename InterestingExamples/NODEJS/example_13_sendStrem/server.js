/*
В результате когда мы обратимся по
 адресу http://localhost:3000/some.doc, то с сервера будет 
 загружен файл some.doc
*/ 

const http = require('http');
const fs=require('fs');

http.createServer(

    function(request,response){

        if(request.url=="/file.doc"){


            /*
                При отправке устанавливаем необходимые заголовки
                Здесь отправляется статусный код "200" и указывается тип
                содержимоего (MIME-тип) "application/msword", то есть файл Microsoft Word

            */ 
            response.writeHead(200, {"Content-Type": "aplication/msword"});

            /*
            Метод fs.createReadStream("some.doc") создает поток для чтения - 
            объект fs.ReadStream. Для получения данных из потока вызывается 
            метод pipe(), в который передается объект интерфейса stream.Writable
            или поток для записи. А именно таким и является 
            объект http.ServerResponse, который реализует этот интерфейс.
            */ 

            fs.createReadStream('file.doc').pipe(response);

        }

        else{
            response.end("Hello word");
        }
    }


).listen(3000);


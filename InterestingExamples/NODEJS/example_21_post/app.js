const express=require('express');
const bodyParser=require('body-parser');

const app=express();

/*
    Для получения данных форм из запроса необходимо использовать 
    специальный пакет body-parser
    npm install body-parser --save
*/ 



// создаем парсер для данных application/x-www-form-urlencoded


/*
    Поскольку данные отправляются с помощью формы, то для создания
    парсера применяется функция urlencoded(). В эту функцию передается 
    объект, устанавливающий параметры парсинга. Значение 
    extended: false указывает, что объект - результат парсинга 
    будет представлять набор пар ключ-значение, а каждое значение
    может быть представлено в виде строки или массива.

*/ 

const urlencodedParser=bodyParser.urlencoded({extended:false});


app.get("/reg", urlencodedParser, function(request, response){
    console.log("__dirname= ", __dirname);
    response.sendFile(__dirname + "/regForm.html");
});



app.post('/reg',urlencodedParser, function(request, response){

    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName}= ${request.body.userAge}`);

});

app.get('/', function(request, response){
    response.send("Главная страница");
});

app.listen(3000);

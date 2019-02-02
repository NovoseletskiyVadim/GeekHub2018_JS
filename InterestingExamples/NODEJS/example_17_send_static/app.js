

const express=require('express');

const app =express();

/*
    Чтобы встроить компонент express.static в процесс обработки запроса, 
    вызывается функция app.use()

    Запустим приложение на выполнение и обратимся в браузере по
     пути "http://localhost:3000/about.html":

*/ 


/*

    Дополнительно мы можем изменить путь к каталогу статических файлов

    app.use("/static", express.static(__dirname + "/public"));

    Теперь чтобы обратиться к файлу about.html, необходимо отправить 
    запрос http://localhost:3000/static/about.html.

*/ 

app.use(express.static(__dirname+"/public"));

app.use("/", function(request, response){
    response.send("<h1> Главная страница</h1>")
});

app.listen(3000);

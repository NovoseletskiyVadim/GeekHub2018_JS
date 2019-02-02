

// Для переадресации применяется метод redirect():

// edirect([status,] path)

const express = require("express");
const app = express();
 
app.use("/index",function (request, response) {
  response.redirect("https://metanit.com")
});


/*
    В данном случае будет идти перенаправление с ресурса "/home" 
    на ресурс "/about", то есть, условно говоря, 
    с http://localhost:3000/home на http://localhost:3000/about.

*/ 

app.use("/home",function (request, response) {
    response.redirect("about")
});
  app.use("/about", function (request, response) {
    response.send("<h1>About</h1>");
});

/*
    в реальности теперь это будет не http://localhost:3000/about,
     а http://localhost:3000/home/about. 
     То есть мы как-бы поднимаемся на один уровень вверх -
      с "home/bar" на "home/" и затем к нему добавляется "about"

*/ 

app.use("/home/bar",function (request, response) {
    response.redirect("about")
});
  app.use("/home/about", function (request, response) {
    response.send("<h1>About</h1>");
});

  
/*
  Если нам необходимо выполнить переадресацию не относительно
   текущего ресурса, а относительно корневого каталога приложения,
    то в начале адреса ставится слеш:
*/ 

app.use("/home/bar",function (request, response) {
    response.redirect("/about")
});
  app.use("/about", function (request, response) {
    response.send("<h1>About</h1>");
});

// еще примеры
app.use("/home/foo/bar",function (request, response) {
    response.redirect("./about")
});


app.use("/home/foo/bar",function (request, response) {
    response.redirect("../about")
});

// Переадресация на уровень выше:
app.use("/home/foo/bar",function (request, response) {
    response.redirect(".")
});

// Переадресация на два уровня выше:
app.use("/home/foo/bar",function (request, response) {
    response.redirect("..")
});

/*По умолчанию при редиректе передается статусный код 302, который 
указывает, что ресурс временно доступен по новому адресу.
Но мы можем указать статусный код 301, чтобы сделать переадресацию постоянной:*/ 

	
response.redirect(301, "/about");


app.listen(3000);


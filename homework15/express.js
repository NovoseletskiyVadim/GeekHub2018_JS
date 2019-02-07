
// подключаем експресс
const express=require('express');
const fs=require('fs');
const bodyParser = require("body-parser");


// создаем обьект рпилодения 
const app=express();

// создаем парсер для данных в формате json
const jsonParser = express.json();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
 

// логируем каждое обращение к серверу 
app.use(function(request, response, next){
     
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    // console.log(data);
    fs.appendFile("server.log", data + "\n", function(){});
    next();
});

app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res){

    // отправляем ответ
    res.sendFile('/index.html');
});

app.get('/addProduct',jsonParser, function(req, res){

    // отправляем ответ
    res.sendFile(__dirname+'/public/input.html');
});

app.post('/addProduct', jsonParser ,function(req, res){
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.nameProduct}= ${req.body.kkalorii}`)
    // отправляем ответ
    // res.sendFile('/input.html');
});

app.get('/listProduct', function(req, res){

    // отправляем ответ
    res.sendFile(__dirname + '/public/product.html');
});

app.get('/listMenu', function(req, res){

    // отправляем ответ
    res.sendFile(__dirname + '/public/menu.html');
});

app.use("/home/foo/bar",function (request, response) {
    response.sendStatus(404).send(`ресурс не найден`);
  });


app.listen(3000, ()=>{
    console.log("Сервер начал слушать ...");
})

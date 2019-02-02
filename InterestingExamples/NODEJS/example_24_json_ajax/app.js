
const express=require('express');

const app=express();

// создаем парсер для данных в формате json 
const jsonParser=express.json();

app.post('/user', jsonParser, function(request, response){

    console.log(request.body);

    if(!request.body){
        return response.sendStatus(400);
    }

    console.log(request.body);
    response.json(`${request.body.userName}=${request.body.userAge}`)

});

app.get('/', function(request,response){

    response.sendFile(__dirname +'/index.html')

});

app.listen(3000);
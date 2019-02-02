
const express=require('express');
const bodyParser=require('body-parser')
const fs=require('fs');

let app =express();
let jsonParser=bodyParser.json();

app.use(express.static(__dirname + '/public'));

// получение списка даных

app.get('/api/users', function(req, res){

    let content=fs.readFileSync('users.json','utf-8');
    let users=JSON.parse(content);
    res.send(users);

});

// получение одного польззователя по id
app.get('/api/users/:id', function(req, res){

    let id=req.params.id;//получчаем id 
    let content=fs.readFileSync('user.json','utf-8');
    let users=JSON.parse(content);
    let user=null;

    // назодим в массиве пользователя по id 
    for( let i=0; i<users.length; i++){
        if(users[i].id===id){

            user=users[i];
            break;

        }
    }

    // отпарвляем пользователя 
    if(user){
        res.send(user)
    }
    else{
        res.status(400).send();
    }

});

// получение отправленных данных

app.post('api/users',jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);

    let userName=req.body.name;
    let userAge=req.body.age;

    let user={name:userName, age:userAge};

    // считываем данные
    let data=fs.readFileSync('users.json','utf-8');
    let users=JSON.parse(data);

    // находим максимальный id
    let id = Math.max.apply(Math,users.map(function(o){return o.id;}));

    user.id=id+1

    // добавляем пользователя в массив
    users.push(user);

    data = JSON.stringify(users);

    // перезаписываем файл с новыми данными
    fs.writeFileSync("users.json", data);
    res.send(user);


});

// удаление пользователя по id 
app.delete('/api/isers/:id', function(req,res){

    let id=req.params.id;
    let data=fs.readFileSync('users.json','utf-8');
    let users=JSON.parse(data);
    let index=-1;
    // находим индекс пользователя в масиве
    for(let i=0;i<users.length;i++){

        if(users[i].id==id){
            index=i;
            break;
        }

    }
    if(index>-1){
        //удаляем польщователя по индексу
        let user=users.splice(index,1)[0];
        let data=JSON.stringify(users);
        fs.writeFileSync('users.json',data);

        // отправляем удаленного пользователя
        res.send(user);
    }

});

app.put('/api/users', jsonParser, function(req,res){

    if(!req.body) return res.sendStatus(400);

    let userId=req.body.id;
    let userName=req.body.name;
    let userAge=req.body.age;

    let data=fs.readFileSync('users.json', 'utf-8');
    let users=JSON.parse(data);
    let user;

    for(let i=0; i<users.length;i++){

        if(users[i].id==userId){
            user=users[i];
            break;
        }
    }

    // изменяем данные у пользователя
    if(user){
        user.age=userAge;
        user.name=userName;

        let data=JSON.stringify('users.json',data)

        res.send(user);

    }
    else{
        res.status(400).send(user);
    }

});

app.listen(3000, function(){
    console.log('Сервер ожидает подключение')
});



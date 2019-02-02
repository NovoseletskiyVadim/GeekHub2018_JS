

const express=require('express');

const app=express();

app.get('/', function(request, response){

    response.send("<h1>Главвная страница</h1>");

});


// http://localhost:3000/about?id=1&name=Tom
app.use('/about', function(request, response){

    let id= request.query.id;
    let userName=request.query.name;
    response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>")
})

// передача массивов
// http://localhost:3000/array?name=Tom&name=Vadim&name=Grisha
app.use('/array', function(request,response){

    console.log(request.query);

    let names=request.query.name;
    let responseText="<ul>";
    for(let i=0; i<names.length; i++){
        responseText+="<li>"+names[i]+"</li>";
    }

    responseText+="<ul>";
    response.send(responseText);

});

// передача обьектов
// http://localhost:3000/about?user[id]=1&user[name]=Tom
app.use("/about", function(request, response){
      
    console.log(request.query);
    let id = request.query.user.id;
    let name = request.query.user.name;
     
    response.send("<h3>id:" + id + "<br>name: " + name +"</h3>");
});


app.listen(3000);



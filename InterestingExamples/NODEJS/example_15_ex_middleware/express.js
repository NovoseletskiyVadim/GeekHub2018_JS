

const express=require('express');

const app=express();

app.use(function(request,response,next){


    console.log("MiddleWare 1");
    next();

});

app.use(function(request, response,next ){

    console.log("MiddleWare 2 ");
    // next();
    response.send("MiddleWare 2");

});

app.use(function(request,response,next){

    console.log("MiddleWare 3")
    next();
});

app.get('/',function(request,response){
    console.log("Route /");
    response.send("Hello");
});

// Функции middleware также могут сопоставляться с определенными маршрутами. 
app.use("/about", function(request, response, next){
     
    console.log("About Middleware");
    response.send("About Middleware");
});

app.listen(3000);
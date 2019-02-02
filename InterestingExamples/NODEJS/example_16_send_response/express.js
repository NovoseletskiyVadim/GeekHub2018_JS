
// vasriant 1
// const express=require("express");

// const app=express();



// app.use(function(request, response){
//     response.send("<h2> Hello </h2>");
//     // можно еще отправлять 
//     // response.send({id:6, name: "Tom"});
//     // response.send(["Tom", "Bob", "Sam"]);
//     // response.send(Buffer.from("Hello Express"));
// });

// app.listen(3000);

// variant 2 


/*Метод send удобен для отправки строк, некоторого кода html */ 
// лучше определять код html в отдельных файлах и затем эти файлы отправлять
//  с помощью функции sendFile()

const express = require("express");
const app = express();
 
/*
    Следует учитывать, что в функцию sendFile необходимо передавать
     абсолютный путь к файлу, именно для этого с помощью __dirname 
     получаем абсолютный путь к текущему проекту и затем добавляем 
     к нему путь к файлу в рамках текущего проекта.


*/ 

app.use("/home/foo/bar",function (request, response) {
    response.status(404).send(`Ресурс не найден`);
  });
  
app.use(function (request, response) {
    console.log("__dirname=", __dirname);
  response.sendFile(__dirname + "/public/main/index.html");
});


 
app.listen(3000);

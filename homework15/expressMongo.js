const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
   
const app = express();
const jsonParser = express.json();
 
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
 
let dbClient;
 
app.use(express.static(__dirname + "/public"));

mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;

    /*
        Поскольку все взаимодействие будет идти с коллекцией products,
        то получаем ссылку на эту коллекцию в локальную переменную 
        приложения app.locals.collection. Затем через эту переменную 
        мы сможем получить доступ к коллекции в любом месте приложения.
    */ 

    // db.createCollection("profile", {capped:true, size:9500, max: 150})
    app.locals.collection = client.db("productdb").collection("products");
    app.locals.collection2=client.db("productdb").collection("menu");
    app.locals.collection3=client.db("productdb").collection("user_values");

    let values=[{"_id":1, "maxValue":0},{"_id":2,"currentValue":0}]
    collection3=app.locals.collection3;
    collection3.insertMany(values, function(err, results){
        console.table(results);
    })




    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

// обрабатывакем данные которые пришли с формы ввода пролуктов
app.post('/api/addProduct', jsonParser, function(req,res){
    if(!req.body) return res.sendStatus(400);

    // console.log(req.body);

    const productName=req.body.nameProduct;
    const kkilokalorii=req.body.kkalorii;

    const info={product:productName, kkal:kkilokalorii};

    const collection=req.app.locals.collection;

    // добавляем документ в базу-
    collection.insertOne(info, function(err, result){
        if(err) return console.log(err);
        res.send(info);
    });


});

//вывод даных на отдельной странице + редактирование

app.get('/api/listProduct', function(req,res){

    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, products){
         
        if(err) return console.log(err);
        res.send(products);
    });

});

// удадение данных
app.delete('/api/listProduct/:id', function(req,res){


    const id = new objectId(req.params.id);

    // console.log('server id=',id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){
               
        if(err) return console.log(err);    
        let product = result.value;
        res.send(product);
    });

});

// изменение данных

// сначала ищем  документ в коллекции
app.get("/api/listProduct/:id", function(req, res){
        
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, product){
               
        if(err) return console.log(err);
        console.table(product);
        res.send(product);
    });
});
// потом изменяем
app.put("/api/listProduct", jsonParser, function(req, res){
        
    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const productName = req.body.product;
    const productKall = req.body.kkal;
       
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {product: productName, kkal: productKall}},
         {returnOriginal: false },function(err, result){
               
        if(err) return console.log(err);     
        const product = result.value;
        res.send(product);
    });
});


// страница меню вывод даных продуктов 

app.get('/api/getProductForMenu', function(req,res){

    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, products){
         
        if(err) return console.log(err);
        res.send(products);
    });

});

// страница меню .  Выаод данных меню из базы

app.get('/api/getListMenu', function(req,res){

    const collection=req.app.locals.collection2;
    collection.find({}).toArray(function(err, listMenu){
        if(err) return console.log(err);



        res.send(listMenu)
    })

});

// обработка доьавления в меню продуктов
app.get('/api/addListMenu/:id',function(req,res){

    // console.log(req);
    
    const id = new objectId(req.params.id);
    // console.log('const id =',id )
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, product){
        
        // console.log("обоаьртка добавления ");
        // console.log( "product=" ,product);    

        if(err) return console.log(err);

        const menuName=product.product;
        const menuKkall=product.kkal;
        const itemMenu={name:menuName, kkall:menuKkall};
        const collection2=app.locals.collection2;
        collection2.insertOne(itemMenu, function(err,result){
        
            if(err) console.log(err);
            
            res.send(itemMenu);
        });
       

    });
});
 
// удадение данных с таблицы меню
app.delete('/api/listMenu/:id', function(req,res){


    const id = new objectId(req.params.id);

    const collection = req.app.locals.collection2;
    collection.findOneAndDelete({_id: id}, function(err, result){
               
        if(err) return console.log(err);    
        let itemMenu = result.value;
        res.send(itemMenu);
    });

});

app.put('/api/addMaxValue', jsonParser, function(req,res){

    if(!req.body) return res.sendStatus(400);
    
    const id=parseInt(req.body.id);
    const maxKalorii=req.body.maxKkal;
    const collection3=req.app.locals.collection3;

    console.log("const id=",id);
    console.log("const maxKalorii=",maxKalorii);



    collection3.findOneAndUpdate(
        {_id:id},
        { $set: { maxValue: maxKalorii}},
        {returnOriginal: false },
        function(err, result){
        if(err) return console.log(err);
        const max = result.value;
        res.send(max);
    });


});




// В конце работы скрипта мы можем закрыть подключение, 
// сохраненное в переменную dbClient
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});
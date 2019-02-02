const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
      
    const db = client.db("userDB");
    const collection = db.collection("users");
 
    if(err) return console.log(err);
      
    /*
        Метод find возвращает специальный объект - Cursor,
         и чтобы получить все данные у этого объекта вызывается метод toArray().
          В этот метод передается функция обратного вызова со стандартными параметрами
    */ 
    collection.find().toArray(function(err, results){
                 
        console.log(results);
        client.close();
    });
});
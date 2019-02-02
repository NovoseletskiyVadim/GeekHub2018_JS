const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
      
    const db = client.db("userDB");
    const collection = db.collection("users");
 
    if(err) return console.log(err);
      

    // Метод findOne() работает аналогично, только позволяет получить один документ
    /*
        db.collection("users").findOne({name: "Bob"}, function(err, doc){
             
            console.log(doc);
            client.close();
        });
    */ 
    collection.find({name: "Tom"}).toArray(function(err, results){
                 
        console.log(results);
        client.close();
    });
});
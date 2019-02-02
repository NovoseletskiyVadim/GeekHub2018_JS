
const MongoClient=require('mongodb').MongoClient;

const url ="mongodb://localhost:27017/";

// / создаем объект MongoClient и передаем ему строку подключения
const mongoClient=new MongoClient(url, {useNewUrlParser:true});


// Для подключения к серверу mongodb применяется метод connect()
mongoClient.connect(function(err,client){

    // client (ссылка на подключенный к серверу клиент)
    const db=client.db('userDB');
    const collection=db.collection('users');
    let user={name:"Tom", age:23};
    // или
    // let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
    //  collection.insertMany(users, function(err, results){
    collection.insertOne(user,function(err,result){

        if(err){
            return console.log(err);
        }

        console.log(result.ops);
        client.close();
    });

});

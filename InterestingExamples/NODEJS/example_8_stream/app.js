// потоки


const fs=require('fs');

// Для создания потока для записи применяется метод fs.createWriteStream()
let writeableStream=fs.createWriteStream('hello.txt');
writeableStream.write("Привет Мир");
writeableStream.write('Продолжение записи....\n');
writeableStream.end("Окончание записи ");

let readableStream=fs.createReadStream('hello.txt','utf-8');


/*
    Сам поток разбивается на ряд кусков или чанков (chunk). И при
     считывании каждого такого куска, возникает событие data. С
      помощью метода on() мы можем подписаться на это событие и
       вывести каждый кусок данных на консоль:
*/ 
readableStream.on('data', function(chank){
    console.log(chank);
})


/*

Только работой с файлами функциональность потоков не ограничивается, 
также имеются сетевые потоки, потоки шифрования, архивации и т.д., но 
общие принципы работы с ними будут те же, что и у файловых потоков.

*/ 
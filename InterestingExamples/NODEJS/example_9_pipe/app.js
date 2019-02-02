

/*
    Pipe - это канал, который связывает поток для чтения и поток для записи 
    и позволяет сразу считать из потока чтения в поток записи. Для чего они 
    нужны? Возьмем, к примеру проблему копирования данных из одного файла в другой.

*/ 


const fs=require('fs');

let readableStream=fs.createReadStream('first.txt','utf-8');

let writeableStream=fs.createWriteStream('sekond.txt');

readableStream.on('data',function(chunk){
    writeableStream.write(chunk);
});


// вариант с pipe

/*У потока чтения вызывается метод pipe(), в который передается поток для записи.*/ 

let readableStreamPipe=fs.createReadStream('first.txt','utf-8');

let writeableStreamPipe=fs.createWriteStream('sekond.txt');

readableStreamPipe.pipe(writeableStreamPipe);







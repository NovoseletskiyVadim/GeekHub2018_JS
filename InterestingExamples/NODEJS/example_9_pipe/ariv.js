

const fs=require('fs');
const zlib=require('zlib');

let readStream=fs.createReadStream('first.txt', 'utf-8');

let writeStream=fs.createWriteStream('hello.txt.gz')

let gzip=zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

/*Для архивации подключается модуль zlib. Каждый метод pipe()
 в цепочке вызовов возвращает поток для чтения, к которому опять
  же можно применить метод pipe() для записи в другой поток.*/ 
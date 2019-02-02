
const fs=require('fs');

// асинхронное чтение
fs.readFile('file.txt','utf-8',
                                function(error, data){
                                    console.log("Асинхр чтение файла");
                                    if(error)throw error;
                                    console.log(data);
                                }
);

console.log("Синхронное чтение файла");

let fileContent=fs.readFileSync('file.txt', 'utf-8');
console.log(fileContent);
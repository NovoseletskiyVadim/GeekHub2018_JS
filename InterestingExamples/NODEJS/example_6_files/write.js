
const fs=require('fs');

// синхроння запись файла
// полностью перезаписават файл

fs.writeFileSync('file.txt', 'Привет Мир!!!');

// асинхронная запись
fs.writeFile('file.txt', 'Привет привет');

// или 

fs.writeFile('file.txt', 'Привет Node.js!!!!!', 
                                                function(error){
                                                    if(error) throw error;

                                                    console.log("Асинх запись файла заершена. содержимое:");
                                                    let data =fs.readFileSync('file.txt','utf-8');
                                                    console.log(data);
                                                }                    
);


// Если надо дозаписать файл, то применяются методы :
// fs.appendFile();
// fs.appendFileSync();





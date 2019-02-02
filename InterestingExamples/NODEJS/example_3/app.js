/*
    Несмотря на то, что нет такого файла как welcome.js, но если в проекте
     есть каталог, который
     содержит файл с именем index.js, то мы можем обращаться к модулю по 
     имени каталога

*/ 

const welcome=require('./welcome');

welcome.getmMorningMess();
welcome.getEveningMess();
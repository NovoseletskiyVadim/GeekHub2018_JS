'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];


function capsLock(str) {
    var symbolCount=str.length;
    var symbol=str;
    var myResult="";
    var myCounter;
    var myValue;
    var resultWorld;
    

        // считывает по символьно всю строку 
    for(var i=0;i<symbolCount;i++){
        if(symbol[i]==" "){
            myResult+=symbol[i];
        }
        else{ // cчитаем сколько букв в слове:
            myCounter=0;//обнуляем счетчик
            myValue=i;// запоминаем начальное  значение i
            
            for(;i<symbolCount;i++){
                myCounter=myCounter+1;               
                if(symbol[i+1]==" "||symbol[i+1]=="?"||symbol[i]=="!")break;
            };

            i=myValue;
           
            if( symbol[i].toUpperCase()==symbol[i]){
                let world;
                world=i+myCounter;
                for(;i<world;i++){
                    if(symbol[i]==symbol[i].toLowerCase()){
                        resultWorld=true;
                        break;                   
                    }
                    else{
                        resultWorld=false;  
                    };
                };
                if(resultWorld==true){
                    i=myValue;
                    for(;i<world;i++){
                        myResult+=symbol[i];
                    };
                   
                }else{
                    i=myValue;
                    for(;i<world;i++){
                        myResult+=symbol[i].toLowerCase();
                    };
                };
            }
            else{
                let world;
                world=i+myCounter;
                for(i+=1;i<world;i++){
                    if(symbol[i]==symbol[i].toLowerCase()){
                        resultWorld=true;
                        break;                   
                    }
                    else{
                        resultWorld=false;  
                    };
                };
                if(resultWorld==true){
                    i=myValue;
                    myResult+=symbol[i];
                    
                    for(i+=1;i<world;i++){
                        myResult+=symbol[i];
                    };
                    
                }else{
                    i=myValue;
                    myResult+=symbol[i].toUpperCase();
                    for(i+=1;i<world;i++){
                        myResult+=symbol[i].toLowerCase();
                    };
                };
            }
           i-=1;
        }        
    }
    
    return myResult;
}


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});

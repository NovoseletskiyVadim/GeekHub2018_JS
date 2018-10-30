'use strict';

/**
 * Упражнение на строки
 *
 * Петя записался в кружок по программированию.
 * На первом занятии Пете задали написать простую программу.
 * Программа должна делать следующее: в заданной строке, которая состоит из прописных и строчных латинских букв, она:
 * удаляет все гласные буквы,
 * перед каждой согласной буквой ставит символ ".",
 * все прописные согласные буквы заменяет на строчные.
 *
 * Гласными буквами считаются буквы "A", "O", "Y", "E", "U", "I", а согласными — все остальные.
 * На вход программе подается ровно одна строка, она должна вернуть результат в виде одной строки,
 * получившейся после обработки.
 *
 * Помогите Пете справиться с этим несложным заданием.
 */

var stringDotTests = [
    {
        parameters: ["tour"],
        expectedResult: ".t.r"
    },
    {
        parameters: ["GeekHub"],
        expectedResult: ".g.k.h.b"
    },
    {
        parameters: ["aBAcAba"],
        expectedResult: ".b.c.b"
    },
    {
        parameters: ["aa"],
        expectedResult: ""
    }
];


function stringDot(word) {
    var myInString;
    myInString= word.toLowerCase();
    var myResultString="";
    for(var i=0; i<=myInString.length-1;i++){
        var inCome=myInString[i];
        switch(inCome){
            case 'A':
            case 'a':
                break;
            case 'O':
            case 'o':
                break;
            case 'Y':
            case 'y':
                break;
            case 'E':
            case 'e':
                break;
            case 'U':
            case 'u':
                break;
            case 'I':
            case 'i':
                break;

            default:
                myResultString+='.'+inCome; 
                console.log(myResultString);
                break;
        }
    }
    return myResultString;
}


tasks.push({
    title: "Упражнение на строки",
    solution: stringDot,
    tests: stringDotTests
});

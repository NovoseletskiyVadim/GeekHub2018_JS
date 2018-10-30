'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
    var myNumerYear=Number(y);
    var myFinalResult=false;
    
    function myNumberYearToString(x){
        var myValue=x+"";
        var myFinishResult;
        var a,b,c,d;

        a=Number(myValue.charAt(0));
        b=Number(myValue.charAt(1));
        c=Number(myValue.charAt(2));
        d=Number(myValue.charAt(3));

        var  myFinishResult_a;
        var  myFinishResult_b; 
        var  myFinishResult_c;
        var  myFinishResult_d;
       
        if(a!=b && a!=c && a!=d){
                myFinishResult_a=a;

            if(b!=c && b!=d){
                myFinishResult_b=b;

                if(c!=d){
                    myFinishResult_c=c;
                    myFinishResult_d=d
          
                }else return myFinishResult=false;
            }else return myFinishResult=false;
        }else return myFinishResult=false; 
        
        myFinishResult=""+myFinishResult_a+myFinishResult_b+myFinishResult_c+myFinishResult_d;
        myFinalResult=myFinishResult;
        return myFinalResult;
    }
    
    for(var i=myNumerYear+1;i<9000;i++){
        
        var finishValue=myNumberYearToString(i)
        if(finishValue===false)continue; 
        else return myFinalResult=(Number(myNumberYearToString(i)));
    };    
}


tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});

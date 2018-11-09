/*
    коллбэк – это функция, которая должна быть выполнена после того, 
    как другая функция завершила выполнение (отсюда и название: callback – функция 
    обратного вызова). 

*/ 

// example 1

function first(){
    // как будбто запрс к API
    setTimeout(
        function(){
            console.log(1);
        },
        500
    );

}

function second(){
    console.log(2);
}

/*
    !!!! JavaScript не нарушает порядок вызова функций, он просто не дожидается
     ответа от функции first, а сразу двигается дальше – к функции second. 
*/ 

first();
second();

// создаем callback

// variant 1
function doHomeWork(subject,callback){
    alert(`Starting my ${subject} homework.`);
    callback();
}

doHomeWork('math', function(){
    alert('Finished my homework');
});

// variant 2
/*
    callback выносм за пределы
*/ 
function doHomeWork1(subject,callback){
    alert(`Starting my ${subject} homework.`);
    callback();
}

function alertFinished(){
    alert('Finished my homework');
}

doHomeWork1('math',alertFinished);






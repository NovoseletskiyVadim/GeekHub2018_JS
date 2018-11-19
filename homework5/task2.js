
// variant 3 


/*
    jQuery предоставляет удобные средства для добавления и удаления элементов из объектной модели документа. Для этого используются методы:

    prepend() - добавляет в выбранные элементы дочерний перед первым дочерним
    append() - добавляет в выбранные элементы дочерний после последнего дочернего
    before() - добавляет элемент после выбранных элементов
    after() - добавляет элемент перед выбранными элементами
    remove() - удаляет выбранные элементы из DOM вместе с потомками
    empty() - удаляет всех потомков выбранных элементов
*/ 

var mainFunktion_2=function(){
    "use strict";

    var ToDoListArray=[];


    // функция рендер html  поля для ввода нового задания
    var $newTaskElement=function(){
        var $nameInputTask, $inputAddTask, $buttonInputTask;
        
        $(".container .blockAddNewTask").empty();

        $nameInputTask=$("<p>").text("Добавить новое задание");
        $inputAddTask=$("<input>");
        $buttonInputTask=$("<button>").text("+");

        $(".blockAddNewTask").append($nameInputTask,$inputAddTask,$buttonInputTask);
        console.log("newTaskelement");
    }



    // функция добавления задания в массив ToDoListArray
    var $addNewTaskInArray=function(){
        
        var textOfTask;

        var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
                     "Пятница", "Суббота"];
        var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

        var DateTask=new Date();
        var currentDateTask=DateTask.getDate()+" "+
                            months[DateTask.getMonth()]+" "+
                            DateTask.getFullYear()+" "+
                            days[DateTask.getDay()]+" "+
                            DateTask.getHours()+":"+
                            DateTask.getMinutes()+" ";

        // если поле инпута не пустое
        if($(".blockAddNewTask input").val()!==""){

            textOfTask=$(".blockAddNewTask input").val();

            ToDoListArray.push(currentDateTask+" задание: "+textOfTask+" ");//запсь значения

            $(".blockAddNewTask input").val("");//очищение поля 

            // ToDoListArray.forEach(function(element){
            //     console.log(element);
            // });

        }
    }

    


    // создаем 3 х слушателей  и на кажлого свое действие
    for(var numberBookMark=1;numberBookMark<=3;numberBookMark++){
        var bookMarkSelector=".bookMarks a:nth-child("+numberBookMark+") span";
        // console.log(bookMarkSelector);


        $(bookMarkSelector).on("click", function(){
            // console.log("click");
            $(".bookMarks span").removeClass("ativated");
            $(this).addClass("ativated");
            $(".contentTaskPage").empty();
            $(".blockAddNewTask").empty();



            // проверим с помощью parent().is() связь "родитель потомок" 
            if($(this).parent().is(":nth-child(1)")){
                // console.log("щелчек на 1 й вкладке");
                $newTaskElement();
                $(".blockAddNewTask button").on("click", function(){
                    //  console.log("щелчек на + ");
                    $addNewTaskInArray();
                });
            }


            else if($(this).parent().is(":nth-child(2)")){
                // console.log("щелчек на 2 й вкладке");
                var $taskContent, $taskContentLi, $taskContentLiButton;
                $taskContent=$("<ul>");// создаем тег <ul>


                // ToDoListArray.forEach(element=>{
                //     // добв. в ul , li со значениям из массива
                //     $taskContent.append($("<li>").text(element));
                // });
                
                //функция вывода списка заданий 
                var $listTaskArray=function(myArray){
                    $(".contentTaskPage").empty();
                    for(var i=0;i<myArray.length;i++){
                        // console.log(ToDoListArray[i]);

                            $taskContentLiButton=$("<button>").attr('button-id', i).text("delete");
                            $taskContentLi=$("<li>").attr('data-id', i);
                            $taskContentLi.text(myArray[i]).append($taskContentLiButton);
                            $taskContent.append($taskContentLi);

                    
                    }
                    // добавляем ul на страницу
                     $(".contentTaskPage").append($taskContent);
                } 

                $listTaskArray(ToDoListArray);

                $(".contentTaskPage").on("click","li button",function(){
                    var a=$(this).attr("button-id");
                        
                    ToDoListArray.splice(a,1);
 
                    $(this).remove();
                    
                    $("li[data-id="+a+"]").remove();
                                        
                });



            }


            else if($(this).parent().is(":nth-child(3)")){
                // console.log("щелчек на 3 й вкладке");
                var ToDoListArrayReverse=[];
                ToDoListArrayReverse=ToDoListArray.slice();
                ToDoListArrayReverse.reverse();

                var $taskContent, $taskContentLi, $taskContentLiButton;
                $taskContent=$("<ul>");// создаем тег <ul>

                for(var i=0;i<ToDoListArrayReverse.length;i++){
                    // console.log(ToDoListArrayReverse[i]);

                        $taskContentLiButton=$("<button>").attr('button-id', i).text("delete");
                        $taskContentLi=$("<li>").attr('data-id', i);
                        $taskContentLi.text(ToDoListArrayReverse[i]).append($taskContentLiButton);
                        $taskContent.append($taskContentLi);

                
                }
                // добавляем ul на страницу
                 $(".contentTaskPage").append($taskContent);

                // $listTaskArray(ToDoListArray);
                
            };  
            return false;
        });
    }    


    console.log("Ok");
}

$(document).ready(mainFunktion_2);
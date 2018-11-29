
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


    // функция рендер html  поля для ввода нового задания
    var $newTaskElement=function(){
        var $nameInputTask, $inputAddTask, $buttonInputTask;
        
        $(".container .blockAddNewTask").empty();

        $nameInputTask=$("<p>").text("Добавить новое задание");
        $inputAddTask=$("<input>");
        $buttonInputTask=$("<button>").text("+");

        $(".blockAddNewTask").append($nameInputTask,$inputAddTask,$buttonInputTask);
    }

    // add constructor of object 

    function createObjectForLocalStorage(completionStatus,timeOfCreateTask, textOfTask){

        this._completionStatus=completionStatus;
        this._timeOfCreateTask=timeOfCreateTask;
        this._textOfTask=textOfTask;

        // this._getFullInfo=getFullInfo;
    }
    // FIXME:
    // function getFullInfo(){
    //     var resultFullInfoTask;
    //     resultFullInfoTask="Дата начала: ";
    //     return resultFullInfoTask;

    // }

    // функция добавления задания в localStorage 
    function $addNewTaskInArray(){
        
        var completionStatus,timeOfCreateTask,textOfTask;

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
                            DateTask.getMinutes()+":"+
                            DateTask.getSeconds()+" ";


        // если поле инпута не пустое то записать значение. 
        if($(".blockAddNewTask input").val()!==""){

            completionStatus=false;
            timeOfCreateTask=currentDateTask;
            textOfTask=$(".blockAddNewTask input").val();

            
            var taskObject=new createObjectForLocalStorage(completionStatus,timeOfCreateTask,textOfTask);
            
            var serialObj = JSON.stringify(taskObject); //сериализуем его            


            // var mykey=Date.now();//variant 1 (уникальеый ключ)

            // variant 2 (ключ по порядку)
            var counterKey=0;
            var maxValueKey=0;
            for(var key in window.localStorage){
                counterKey++;
                if(counterKey<=window.localStorage.length){

                    var currentKey=parseInt(key)
                    
                    if(currentKey>maxValueKey){
                        maxValueKey=currentKey;
                    } 

                }
            }

            var mykey=maxValueKey+1

            window.localStorage.setItem(mykey,serialObj);

            $(".blockAddNewTask input").val("");//очищение поля 
            
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

        //TODO:  new function "render task "
            function renderTask(){
                var $taskTable, 
                $task_row,
                $task_td_task,
                $task_td_DeleteButton,
                $task_td_ToChangeButton,
                $task_td_ToSaveChangeButton,

                $taskStatus,
                $taskDeleteButton,
                $taskToChangeButton,
                $taskToSaveChangeButton,
                
                $taskTextStartTask,
                $taskStartTimeTask,
                $taskTetxDescribe,
                $taskContent,
                $taskTextFull;

           
            // create a table in the index 
            $taskTable=$("<table>");

            // function output key property
            var $listTaskArray=function(){
                $(".contentTaskPage").empty();

                var myCounter=0;
                for(var key in window.localStorage){

                    // FIXME: По какому принципу оно , в каком порядке оно достает ключи, ЗАГАДКА
                    // console.warn(key);

                    myCounter++;
                    if(myCounter<=window.localStorage.length){


                        // FIXME: а потом по ним потому и  обьекты в разброс..
                        var returnObjFromLocalStorage=JSON.parse(window.localStorage.getItem(key));


                       

                        if(returnObjFromLocalStorage!==null){
                            $task_row=$("<tr>").attr('data-rowId',myCounter);

                            $task_td_task=$("<td>").attr('data-task',myCounter);
                            
                            $task_td_DeleteButton=$("<td>").attr('data-DeleteButton',myCounter);
                            $task_td_ToChangeButton=$("<td>").attr('data-ToChangeButton',myCounter);
                            $task_td_ToSaveChangeButton=$("<td>").attr('data-ToSaveChangeButton',myCounter);


                            $taskStatus=$("<input>").attr('type',"checkbox").attr('data-idStatus',myCounter).prop('checked',returnObjFromLocalStorage._completionStatus);
                            
                            $taskTextStartTask=$("<span>").text('дата начала :')
                                                          .css('color','red')
                                                          .css('font-weight','bold');
                            $taskStartTimeTask=$("<span>").attr('data-StartTimeTask',myCounter)
                                                          .text(' '+returnObjFromLocalStorage._timeOfCreateTask)
                                                          .css('font-weight','bold');
                            $taskTetxDescribe=$("<span>").text('Задание:')
                                                         .css('color','red')
                                                         .css('font-weight','bold');
                            $taskTextFull=$("<span>").attr('data-taskTextFull',myCounter)
                                                    .text(returnObjFromLocalStorage._textOfTask)
                                                     .css('font-size','1.5em');

                            $taskContent=$("<span>").append(
                                                            $taskTextStartTask,
                                                            $taskStartTimeTask,
                                                            $taskTetxDescribe,
                                                            $taskTextFull
                                                            );

                            $taskDeleteButton=$("<button>").attr('data-buttonDelete', myCounter).attr('data-ObjKey', key).text("delete");
                            $taskToChangeButton=$("<button>").attr('data-buttonChange',myCounter).attr('data-ObjKey',key).text("ToChange");
                            $taskToSaveChangeButton=$("<button>").attr('data-buttonSave',myCounter).attr('data-ObjKey',key).text("ToSaveChanges");

                            $task_td_task.append($taskStatus,$taskContent);
                            $task_td_DeleteButton.append($taskDeleteButton);
                            $task_td_ToChangeButton.append($taskToChangeButton);
                            $task_td_ToSaveChangeButton.append($taskToSaveChangeButton);

                            $task_row.append(   $task_td_task,
                                                $task_td_DeleteButton,
                                                $task_td_ToChangeButton,
                                                $task_td_ToSaveChangeButton
                                             );

                            $taskTable.append($task_row);
                        }   
                    }
                } 

                // добавляем table  на страницу
                 $(".contentTaskPage").append($taskTable);
            } 

            $listTaskArray();

            // click button delete task 
            $(".contentTaskPage").on("click","td button[data-buttonDelete]",function(){
                
                var a=$(this).attr("data-buttonDelete");
                var b=$(this).attr("data-ObjKey");
                window.localStorage.removeItem(b);
                 
                $(this).remove();
                $("tr[data-rowId="+a+"]").remove();
                                    
            });

            // click button "change text " 
            $(".contentTaskPage").on("click","td button[data-buttonChange]", function(){
                //    console.log("click change text");
                var a,textOfTask;
                a=$(this).attr("data-buttonChange");
                
                textOfTask=prompt("Изменение задания.Введите другое задание","текст другого задания");
                $("span [data-taskTextFull="+a+"] ").empty();

                $("span [data-taskTextFull="+a+"] ").text(textOfTask);


            });
            // click button " save changes" 
            $(".contentTaskPage").on("click","td button[data-buttonSave]",function(){

                var a, keyChangeObject,completionStatus,timeOfCreateTask,textOfTask;
                  
                keyChangeObject=$(this).attr("data-ObjKey");
                a=$(this).attr("data-buttonSave");

                if($("input[data-idStatus="+a+"]").is(':checked')){
                    completionStatus=true;
                }else{
                    completionStatus=false;
                }

                timeOfCreateTask=$("span[data-StartTimeTask="+a+"]").text();

                textOfTask=$("span [data-taskTextFull="+a+"]").text();

                var taskChangeObject=new createObjectForLocalStorage(completionStatus,timeOfCreateTask,textOfTask);

                var serialTaskChangeObject=JSON.stringify(taskChangeObject);

                window.localStorage.setItem(keyChangeObject,serialTaskChangeObject);

            });

                
            }

        //TODO: function reverse render task 

        function reverseRenderTask(){
            var $taskTable, 
            $task_row,
            $task_td_task,
            $task_td_DeleteButton,
            $task_td_ToChangeButton,
            $task_td_ToSaveChangeButton,

            $taskStatus,
            $taskDeleteButton,
            $taskToChangeButton,
            $taskToSaveChangeButton,
            
            $taskTextStartTask,
            $taskStartTimeTask,
            $taskTetxDescribe,
            $taskContent,
            $taskTextFull;

       
        // create a table in the index 
        $taskTable=$("<table>");

        // function output key property
        var $listTaskArray=function(){
            $(".contentTaskPage").empty();

            var myCounter=0;
            for(var key in window.localStorage){
                myCounter++;
                if(myCounter<=window.localStorage.length){
                    var returnObjFromLocalStorage=JSON.parse(window.localStorage.getItem(key));

                   

                    if(returnObjFromLocalStorage!==null){

                        

                        $task_row=$("<tr>").attr('data-rowId',myCounter);

                        $task_td_task=$("<td>").attr('data-task',myCounter);
                        
                        $task_td_DeleteButton=$("<td>").attr('data-DeleteButton',myCounter);
                        $task_td_ToChangeButton=$("<td>").attr('data-ToChangeButton',myCounter);
                        $task_td_ToSaveChangeButton=$("<td>").attr('data-ToSaveChangeButton',myCounter);


                        $taskStatus=$("<input>").attr('type',"checkbox").attr('data-idStatus',myCounter).prop('checked',returnObjFromLocalStorage._completionStatus);
                        
                        $taskTextStartTask=$("<span>").text('дата начала :')
                                                      .css('color','red')
                                                      .css('font-weight','bold');
                        $taskStartTimeTask=$("<span>").attr('data-StartTimeTask',myCounter)
                                                      .text(' '+returnObjFromLocalStorage._timeOfCreateTask)
                                                      .css('font-weight','bold');
                        $taskTetxDescribe=$("<span>").text('Задание:')
                                                     .css('color','red')
                                                     .css('font-weight','bold');
                        $taskTextFull=$("<span>").attr('data-taskTextFull',myCounter)
                                                .text(returnObjFromLocalStorage._textOfTask)
                                                 .css('font-size','1.5em');

                        $taskContent=$("<span>").append(
                                                        $taskTextStartTask,
                                                        $taskStartTimeTask,
                                                        $taskTetxDescribe,
                                                        $taskTextFull
                                                        );

                        $taskDeleteButton=$("<button>").attr('data-buttonDelete', myCounter).attr('data-ObjKey', key).text("delete");
                        $taskToChangeButton=$("<button>").attr('data-buttonChange',myCounter).attr('data-ObjKey',key).text("ToChange");
                        $taskToSaveChangeButton=$("<button>").attr('data-buttonSave',myCounter).attr('data-ObjKey',key).text("ToSaveChanges");

                        $task_td_task.append($taskStatus,$taskContent);
                        $task_td_DeleteButton.append($taskDeleteButton);
                        $task_td_ToChangeButton.append($taskToChangeButton);
                        $task_td_ToSaveChangeButton.append($taskToSaveChangeButton);

                        $task_row.append(   $task_td_task,
                                            $task_td_DeleteButton,
                                            $task_td_ToChangeButton,
                                            $task_td_ToSaveChangeButton
                                         );

                        $taskTable.append($task_row);
                    }   
                }
            } 

            // добавляем table  на страницу
             $(".contentTaskPage").append($taskTable);
        } 

        $listTaskArray();

        // click button delete task 
        $(".contentTaskPage").on("click","td button[data-buttonDelete]",function(){
            
            var a=$(this).attr("data-buttonDelete");
            var b=$(this).attr("data-ObjKey");
            window.localStorage.removeItem(b);
             
            $(this).remove();
            $("tr[data-rowId="+a+"]").remove();
                                
        });

        // click button "change text " 
        $(".contentTaskPage").on("click","td button[data-buttonChange]", function(){
            //    console.log("click change text");
            var a,textOfTask;
            a=$(this).attr("data-buttonChange");
            
            textOfTask=prompt("Изменение задания.Введите другое задание","текст другого задания");
            $("span [data-taskTextFull="+a+"] ").empty();

            $("span [data-taskTextFull="+a+"] ").text(textOfTask);


        });
        // click button " save changes" 
        $(".contentTaskPage").on("click","td button[data-buttonSave]",function(){

            var a, keyChangeObject,completionStatus,timeOfCreateTask,textOfTask;
              
            keyChangeObject=$(this).attr("data-ObjKey");
            a=$(this).attr("data-buttonSave");

            if($("input[data-idStatus="+a+"]").is(':checked')){
                completionStatus=true;
            }else{
                completionStatus=false;
            }

            timeOfCreateTask=$("span[data-StartTimeTask="+a+"]").text();

            textOfTask=$("span [data-taskTextFull="+a+"]").text();

            var taskChangeObject=new createObjectForLocalStorage(completionStatus,timeOfCreateTask,textOfTask);

            var serialTaskChangeObject=JSON.stringify(taskChangeObject);

            window.localStorage.setItem(keyChangeObject,serialTaskChangeObject);

        });

            
        }


            // проверим с помощью parent().is() связь "родитель потомок" 
            if($(this).parent().is(":nth-child(1)")){
                $newTaskElement();
                $(".blockAddNewTask button").on("click", function(){
                    
                    $addNewTaskInArray();
                      
                    
                });
            }

           
            else if($(this).parent().is(":nth-child(2)")){
               
                renderTask();

            }


            else if($(this).parent().is(":nth-child(3)")){
               
                reverseRenderTask();
    
                
            };  
            return false;
        });
    }    


    console.log("jQuery=Ok");
}

$(document).ready(mainFunktion_2);
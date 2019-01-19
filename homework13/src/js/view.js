
// экспортирую вьюху в main.js(точка входа)
export default View;

// импорт функционала Drag And Drop
import {

    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleDragEnd
        
} from './dragAndDrop.js';


// конструктор
function View(){}

View.prototype={

    newTaskElement:function(){
        var $nameInputTask, $inputAddTask, $buttonInputTask;
        
        
        $(".container .blockAddNewTask").empty();

        $nameInputTask=$("<p>").text("Добавить новое задание");
        $inputAddTask=$("<input>");
        $buttonInputTask=$("<button>").text("+");

        $(".blockAddNewTask").append($nameInputTask,$inputAddTask,$buttonInputTask);

        // console.log("ok view");


    },

    //new function "render task "
    renderTask:function (ArrayRenderTask){

        $(".contentTaskPage").empty();

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

        // render  task information
        var counterForRender=0;
        for(var i=0;i<=ArrayRenderTask.length;i++){
            if(ArrayRenderTask[i]===undefined)continue;


            else{
                counterForRender++
                $task_row=$("<tr>").attr('data-rowId',counterForRender)
                                    .attr('draggable','true')
                                    .addClass( 'dragAndDrop' );

                $task_td_task=$("<td>").attr('data-task',counterForRender);
                
                $task_td_DeleteButton=$("<td>").attr('data-DeleteButton',counterForRender);
                $task_td_ToChangeButton=$("<td>").attr('data-ToChangeButton',counterForRender);
                $task_td_ToSaveChangeButton=$("<td>").attr('data-ToSaveChangeButton',counterForRender);


                $taskStatus=$("<input>").attr('type',"checkbox").attr('data-idStatus',counterForRender).prop('checked',ArrayRenderTask[i]._completionStatus);
                
                $taskTextStartTask=$("<span>").text('дата начала :')
                                            .css('color','red')
                                            .css('font-weight','bold');
                $taskStartTimeTask=$("<span>").attr('data-StartTimeTask',counterForRender)
                                            .text(' '+ArrayRenderTask[i]._timeOfCreateTask)
                                            .css('font-weight','bold');
                $taskTetxDescribe=$("<span>").text('Задание:')
                                            .css('color','red')
                                            .css('font-weight','bold');
                $taskTextFull=$("<span>").attr('data-taskTextFull',counterForRender)
                                        .text(ArrayRenderTask[i]._textOfTask)
                                        .css('font-size','1.5em');

                $taskContent=$("<span>").append(
                                                $taskTextStartTask,
                                                $taskStartTimeTask,
                                                $taskTetxDescribe,
                                                $taskTextFull
                                                );

                $taskDeleteButton=$("<button>").attr('data-buttonDelete', counterForRender).attr('data-ObjKey', i).text("delete");
                $taskToChangeButton=$("<button>").attr('data-buttonChange',counterForRender).attr('data-ObjKey',i).text("ToChange");
                $taskToSaveChangeButton=$("<button>").attr('data-buttonSave',counterForRender).attr('data-ObjKey',i).text("ToSaveChanges");

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

        // добавляем table  на страницу
        $(".contentTaskPage").append($taskTable); 

    
        var cols = document.querySelectorAll('tr.dragAndDrop');
        [].forEach.call(cols, function(col) {

            col.addEventListener('dragstart', handleDragStart, false);
            col.addEventListener('dragenter', handleDragEnter, false);
            col.addEventListener('dragover', handleDragOver, false);
            col.addEventListener('dragleave', handleDragLeave, false);
            col.addEventListener('drop', handleDrop, false);
            col.addEventListener('dragend', handleDragEnd, false);
        });
    },
    
    // new function "reverse render task "
    reverseRenderTask:function (ArrayRenderTask){

        var reverseArrayRenderTask=[];
        reverseArrayRenderTask=ArrayRenderTask;
        // reverseArrayRenderTask.reverse();

        $(".contentTaskPage").empty();

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

        // TODO: render  task information
        var counterForRender=0;
        for(var i=reverseArrayRenderTask.length;i>=0;i--){
            if(reverseArrayRenderTask[i]===undefined)continue;


            else{
                counterForRender++
                $task_row=$("<tr>").attr('data-rowId',counterForRender)
                                    .attr('draggable','true')
                                    .addClass( 'dragAndDrop' );

                $task_td_task=$("<td>").attr('data-task',counterForRender);
                
                $task_td_DeleteButton=$("<td>").attr('data-DeleteButton',counterForRender);
                $task_td_ToChangeButton=$("<td>").attr('data-ToChangeButton',counterForRender);
                $task_td_ToSaveChangeButton=$("<td>").attr('data-ToSaveChangeButton',counterForRender);


                $taskStatus=$("<input>").attr('type',"checkbox").attr('data-idStatus',counterForRender).prop('checked',reverseArrayRenderTask[i]._completionStatus);
                
                $taskTextStartTask=$("<span>").text('дата начала :')
                                            .css('color','red')
                                            .css('font-weight','bold');
                $taskStartTimeTask=$("<span>").attr('data-StartTimeTask',counterForRender)
                                            .text(' '+reverseArrayRenderTask[i]._timeOfCreateTask)
                                            .css('font-weight','bold');
                $taskTetxDescribe=$("<span>").text('Задание:')
                                            .css('color','red')
                                            .css('font-weight','bold');
                $taskTextFull=$("<span>").attr('data-taskTextFull',counterForRender)
                                        .text(reverseArrayRenderTask[i]._textOfTask)
                                        .css('font-size','1.5em');

                $taskContent=$("<span>").append(
                                                $taskTextStartTask,
                                                $taskStartTimeTask,
                                                $taskTetxDescribe,
                                                $taskTextFull
                                                );

                $taskDeleteButton=$("<button>").attr('data-buttonDelete', counterForRender).attr('data-ObjKey', i).text("delete");
                $taskToChangeButton=$("<button>").attr('data-buttonChange',counterForRender).attr('data-ObjKey',i).text("ToChange");
                $taskToSaveChangeButton=$("<button>").attr('data-buttonSave',counterForRender).attr('data-ObjKey',i).text("ToSaveChanges");

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

        // добавляем table  на страницу
        $(".contentTaskPage").append($taskTable); 
    
        var cols = document.querySelectorAll('tr.dragAndDrop');
        // console.log("cols=",cols);
        [].forEach.call(cols, function(col) {

        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false);
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
        });
    

    
    }

    


}





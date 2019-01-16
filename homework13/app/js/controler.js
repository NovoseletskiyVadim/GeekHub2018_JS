import createObjectForLocalStorage from './createObjectForLocalStorage.js';
export default Controler;


// конструктор 
function Controler(model,view){

    // создаем 3 х слушателей  и на кажлого свое действие(закуладки на странице)

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

                view.newTaskElement();
                $(".blockAddNewTask button").on("click", function(){

                    model.addNewTaskInArray(); 
                    alert("Новое задание сохранено"); 

                });
            }

        
            else if($(this).parent().is(":nth-child(2)")){

                view.renderTask(model.arrFfromLocalStorage());

            }


            else if($(this).parent().is(":nth-child(3)")){
            
                view.reverseRenderTask(model.arrFfromLocalStorage());
    
            };  
            return false;
        });

    }
       

    // TODO: обработчики событий кнопок delete , change, save

    // click button delete task 
    $(".contentTaskPage").on("click","td button[data-buttonDelete]",function(){

        var a=$(this).attr("data-buttonDelete");
        var b=$(this).attr("data-ObjKey");
        var c=$(this).parent().parent().attr('data-rowId');

        window.localStorage.removeItem(b);
            
        $(this).remove();

        

        $("tr[data-rowId="+c+"]").remove();

        alert("Элемент удален из localStorage!")
                        
    });

    // click button "change text " 
    $(".contentTaskPage").on("click","td button[data-buttonChange]", function(){
        
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

    alert("Изминеня сохранены в Local Storage!");

    });

}    

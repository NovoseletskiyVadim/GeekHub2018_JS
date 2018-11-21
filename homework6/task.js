
var mainTomaggochi=function(){

    "use strict";

/**********Конструктор обьекта***********/ 

    function Tomagochi(name,health,satiety,strength,happiness){

        this._name=name;// имя
    
        this._health=health;//здоровье
    
        this._satiety=satiety;//сытость 
    
        this._strength=strength;//сила
    
        this._happiness=happiness;// щастье
    
        this._ToFeed=ToFeed;// метод "кормить"
    
        this._ToPlay=ToPlay;//метод "играть" 
    
        this._ToWork=ToWork;// метод "работать"
    
        this._ToSleep=ToSleep;//метод "спать"
    
    
        return this;
    }
    
    // метод "кормить"
    function ToFeed(){
        console.log("кормить");
    }
    
    //метод "играть" 
    function ToPlay(){
        console.log("играть");
    }
    
    // метод "работать"
     function ToWork(){
         console.log("работать");
     }
    
    //метод "спать"
    function ToSleep(){
        console.log("спать")
    }

/********end конструктор обьекта**********/ 

var first=new Tomagochi("Vasya",100,90,80,50);





var TomagochiListArray=[];







// функция рендер html  поля для ввода нового задания
var $newOneTomagochi=function(){

    var $nameInputTomagochi,
        $inputAddName,
        $inputAddHealth,
        $inputAddSatiety,
        $inputAddStrength,
        $inputAddHappiness,
        $buttonInputTask,
        $ParagrafInputAddName;
    
    $(".container .blockAddNewTask").empty();

    $nameInputTomagochi=$("<p>").text("Добавить томагочи");



    $inputAddName=$("<input>").append($("<span>")).text("Name");
    $ParagrafInputAddName=$("<p>").append($inputAddName);

    // $inputAddHealth=$("<input>");
    // $inputAddSatiety=$("<input>");
    // $inputAddStrength=$("<input>");
    // $inputAddHappiness=$("<input>");

    


    $buttonInputTask=$("<button>").text("+");

    $(".blockAddNewTask").append(  
                                    $nameInputTomagochi,
                                    // $ParagrafInputAddName,
                                    $inputAddName,
                                    
                                    $buttonInputTask
                                    );
    // console.log("newTaskelement");
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
            console.log("щелчек на 1 й вкладке");
            // $newTaskElement();
            // $(".blockAddNewTask button").on("click", function(){
                //  console.log("щелчек на + ");
                // $addNewTaskInArray();
            // });

            var resultQuestion=confirm("Вы хотите один тамагочи");

            if(resultQuestion){
                console.log("один тамагочи");
                $(".blockAddNewTask:nth-child(1)").removeClass("oneTamagochiNo");
                $(".blockAddNewTask:nth-child(1)").addClass("oneTamagochiYes");
            }
            else{
                // $(".blockAddNewTask div").removeClass("armyTamagochiYes");
                console.log("армия тамагочи ")
            }









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
            // var ToDoListArrayReverse=[];
            // ToDoListArrayReverse=ToDoListArray.slice();
            // ToDoListArrayReverse.reverse();

            // var $taskContent, $taskContentLi, $taskContentLiButton;
            // $taskContent=$("<ul>");// создаем тег <ul>

            // for(var i=0;i<ToDoListArrayReverse.length;i++){
            //     // console.log(ToDoListArrayReverse[i]);

            //         $taskContentLiButton=$("<button>").attr('button-id', i).text("delete");
            //         $taskContentLi=$("<li>").attr('data-id', i);
            //         $taskContentLi.text(ToDoListArrayReverse[i]).append($taskContentLiButton);
            //         $taskContent.append($taskContentLi);

            
            // }
            // добавляем ul на страницу
            //  $(".contentTaskPage").append($taskContent);

            // $listTaskArray(ToDoListArray);
            
        };  
        return false;
    });
}    

    
    console.log("ok");
}

$(document).ready(mainTomaggochi);












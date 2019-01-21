import $ from 'jquery';

// импортирую модуль с  шаблоном обьекта(по которому записиваю обьекты и извлекаю из LocalStorage )
import createObjectForLocalStorage from './createObjectForLocalStorage.js';

// экспортирую модель в main.js(точка входа)
export default ModelLocalStorage;


// конструктор
function ModelLocalStorage(){
    
}


ModelLocalStorage.prototype={

    //метод добавления задания в localStorage(сохраняем обьект) 
    addNewTaskInArray:function(){

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
                            DateTask.getMinutes();

        // если поле инпута не пустое то записать значение. 
        if($(".blockAddNewTask input").val()!==""){

            completionStatus=false;
            timeOfCreateTask=currentDateTask;
            textOfTask=$(".blockAddNewTask input").val();

            
            var taskObject=new createObjectForLocalStorage(completionStatus,timeOfCreateTask,textOfTask);
            
            var serialObj = JSON.stringify(taskObject); //сериализуем его    
            // console.log(serialObj);        

            // var mykey=Date.now();// generate key value variant №1

            // generate key value variant №2
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

    },


    // метод возвращения массива из local storage;
    arrFfromLocalStorage:function(){

        var renderArray=[];

        var myCounter=0;
        
        // add information in the array from local storage
        for(var key in window.localStorage){
            myCounter++;
            if(myCounter<=window.localStorage.length){
                if(parseInt(key)){
                    //  добавлением обьектов из local Storage в массив  renderArray=[];
                    var returnObjFromLocalStorage=JSON.parse(window.localStorage.getItem(key));
            
                     renderArray[parseInt(key)]=returnObjFromLocalStorage;
                }
                else continue;
                
                
                
            }
        }
        return renderArray;

    }



}


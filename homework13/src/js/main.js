import ModelLocalStorage from './model.js';
import Controler from './controler.js';
import View from './view.js'; 

 $(document).ready(function(){

    var model=new ModelLocalStorage();
    var view=new View();
    var controler=new Controler(model,view);

    view.newTaskElement(); 
    $(".blockAddNewTask button").on("click", function(){

        model.addNewTaskInArray(); 
        alert("Новое задание сохранено"); 

    });
    
 });
     
    
    
    
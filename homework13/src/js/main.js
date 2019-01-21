
import $ from 'jquery';

import ModelLocalStorage from './model';

import View from './view'; 

import Controler from './controler';




 $(document).ready(function(){

    var model=new ModelLocalStorage();
    var view=new View();
    var controler=new Controler(model,view);

    view.newTaskElement(); 
    $(".blockAddNewTask button").on("click", function(){

        model.addNewTaskInArray(); 
        alert("Новое задание сохранено"); 

    });

    controler.tabSwitching();
    controler.deleteChangeSaveButton();
    
 });
     
    
    
    
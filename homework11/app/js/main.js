
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
     
    
    
    
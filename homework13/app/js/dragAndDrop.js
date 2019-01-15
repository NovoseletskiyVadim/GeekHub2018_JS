// console.log("dran and drop=ok");


/*  
    при перетаскивании мы переписываем innerHtml элементов, т.е.
    просто содержимое. всякие динамические изменения обьектов DOM, 
    как например, состояние "checked" у чекбокса, естественно, теряется, 
    так как фактически это новый чекбокс. старый контекст теряется.
    вариантов решения вижу два - либо вместо this.innerHTML оперировать
    самим объектом this (ну и dragSrcEl вместо dragSrcEl.innerHTML),
    либо сохранять состояние чекбокса в data-атрибуте и после переноса
    проверять этот дата-атрибут и устанавливать состояние чекбокса в
    зависимости от значения data-атрибута
    
*/ 

var dragSrcEl = null;


// обработчик события dragstart
function handleDragStart(e) {
   
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    
}


function handleDragOver(e) {

    if (e.preventDefault) {
        e.preventDefault(); 
    }

    e.dataTransfer.dropEffect = 'move';  

    return false;
}

function handleDragEnter(e) {

}

function handleDragLeave(e) {
   

}


function handleDrop(e) {

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }
    
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the columnwe dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
    

}

function handleDragEnd(e) {

    // setTimeout(FinishPlay,100);
}



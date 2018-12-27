console.log("transferContent.js=ok");

var dragSrcEl = null;

function FinishPlay(){

    var value=document.querySelectorAll('div.column>p');
    var divColumn=document.querySelectorAll('div.column')

    var myCounter,finalResult;
    myCounter=1;
    finalResult=0;
    for(var i=0;i<16;i++){

        var result=parseInt(value[i].outerText);

        if(myCounter===result){
            divColumn[i].style.backgroundColor="#ccc";
            finalResult++;  
        }
        else if(isNaN(result)){
             divColumn[i].style.backgroundColor="white";

            continue;
        }
        else{
            divColumn[i].style.backgroundColor="#ccc";
            
        }

        myCounter++;
    }

    if (finalResult===15)alert("Вы вииграли!!!!!");
}


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

    setTimeout(FinishPlay,100);
}


var cols = document.querySelectorAll('#columns .column');

console.log("cols=",cols);

[].forEach.call(cols, function(col) {

    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
});
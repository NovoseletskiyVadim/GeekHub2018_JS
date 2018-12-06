
console.log("task.js = ok");



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
var arr = [];

// function add value in array and shuffle
function shuffleArray(){
    for (var i = 1; i <= 15; i++){
        arr.push(i);
    }
    shuffle(arr);
}

// function add content(value:1-15) in the table 
function start(){
    arr = [];
    shuffleArray();
    
    var counter=0;

    for(var i=0;i<=3;i++){

        var tableZonaTR=tableZona.insertRow(i);

        for(var j=0;j<=3;j++){
            
            // create element-number
            var divColumn=document.createElement('div');
            divColumn.setAttribute('draggable','true');
            divColumn.className="column";

            var p=document.createElement('p');
            if(arr[counter]==undefined){
                divColumn.style.backgroundColor="white";
                p.innerText="";
            }
            else{
                p.innerText=arr[counter];
            }

            divColumn.appendChild(p);
        
            var tableZonaTR_td=tableZonaTR.insertCell(j);
            tableZonaTR_td.appendChild(divColumn);
            
            counter++;

        }
    }
}

// function remove content(value:1-15) from  the table 
function removeContentFromTable(){
    var mytable=document.querySelector('tbody');
    var TableTR=document.querySelectorAll('tr');

    for(var i=0;i<TableTR.length;i++){
        mytable.removeChild(TableTR[i]);
    }
}



//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


var divTable=document.querySelector('div.table');


// create caption 
var caption=document.createElement('h3');
caption.innerText="Игра в Пятнашки";
divTable.appendChild(caption);

// create table
var tableZona=document.createElement('table');
tableZona.setAttribute('id','columns');
divTable.appendChild(tableZona);

var myButton=document.createElement('button');
myButton.innerText="начать заново";
myButton.onclick=function(){

    removeContentFromTable();

    start();  

    var cols = document.querySelectorAll('#columns .column');

    [].forEach.call(cols, function(col) {

    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
});
}
divTable.appendChild(myButton);

// create content table (tr td)
start();



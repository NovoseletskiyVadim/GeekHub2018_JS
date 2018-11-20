

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


var first=new Tomagochi("Vasya",100,90,80,50);


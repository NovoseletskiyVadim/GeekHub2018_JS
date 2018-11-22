
var mainTomaggochi=function(){

    "use strict";

/**********Конструктор обьекта***********/ 

    function Tomagochi(name,health,satiety,strength,money,happiness){

        this._name=name;// имя
    
        this._health=health;//здоровье
    
        this._satiety=satiety;//сытость 
    
        this._strength=strength;//сила

        this._money=money// деньги
    
        this._happiness=happiness;// щастье

        
        
    
        this._ToFood=ToFood;// метод "кушать"
    
        this._ToPlay=ToPlay;//метод "спортзал" 
    
        this._ToWork=ToWork;// метод "работать"
    
        this._ToSleep=ToSleep;//метод "спать"

        this._toTravel=ToTravel;// метод "путишествовать "
    
    
        return this;
    }
    
    // метод "кушать "
    function ToFood(){

        var healthValue, strengthValue, satietiValue;

        healthValue=this._health=parseInt(this._health)+10;
        strengthValue=this._strength=parseInt(this._strength)+10;
        satietiValue=this._satiety=parseInt(this._satiety)-5;

       return [healthValue,strengthValue,satietiValue];
    }
    
    //метод "спортзал" 
    function ToPlay(){

        var happinessValue,
            strengthValue,
            healthValue, 
            moneyValue,
            satietiValue ;

        happinessValue=this._happiness=parseInt(this._happiness)+5;
        strengthValue=this._strength=parseInt(this._strength)+8;
        healthValue=this._health=parseInt(this._health)+10;
        satietiValue=this._satiety=parseInt(this._satiety)-5;
        moneyValue=this._money=parseInt(this._money)-5;

        return [happinessValue, strengthValue,healthValue, satietiValue,moneyValue];
    }
    
    // метод "работать"
     function ToWork(){

         var  moneyValue, healthValue, foodValue;

        moneyValue=this._money=parseInt(this._money)+100;
        healthValue=this._health=parseInt(this._health)-5;
        foodValue=this._satiety=parseInt(this._satiety)+15

        return[moneyValue, healthValue,foodValue];
     }
    
    //метод "спать"
    function ToSleep(){

        var healthValue, strengthValue, happinessValue;

        healthValue=this._health=parseInt(this._health)+2;
        strengthValue=this._strength=parseInt(this._strength)+2;
        happinessValue=this._happiness=parseInt(this._happiness)+2;

        return[healthValue, strengthValue,happinessValue];
    }

    function ToTravel(){

        var healthValue, strengthValue, happinessValue, moneyValue, satietiValue;

        healthValue=this._health=parseInt(this._health)+5;
        strengthValue=this._strength=parseInt(this._strength)+3;
        happinessValue=this._happiness=parseInt(this._happiness)+20;
        moneyValue=this._money=parseInt(this._money)-30;
        satietiValue=this._satiety=parseInt(this._satiety)-5;

        return[healthValue, strengthValue,happinessValue,moneyValue,satietiValue];
    }

/********end конструктор обьекта**********/ 

    var first=new Tomagochi("Vasya",100,90,80,50);

    $(".Start").on("click", function(){

        var Tomagochi_1,
            name,
            health,
            satiety,
            strength,
            money,
            happiness;

        if($("input.Name").val()!==""){
            if($("input.Health").val()!==""){
                if($("input.Satiety").val()!==""){
                    if($("input.Strength").val()!==""){
                        if($("input.Money").val()!==""){
                            if($("input.Happiness").val()!==""){


                                name=$("input.Name").val();
                                health=$("input.Health").val();
                                satiety=$("input.Satiety").val();
                                strength=$("input.Strength").val();
                                money=$("input.Money").val();
                                happiness=$("input.Happiness").val();
    
                                // создание обьекта
                                Tomagochi_1=new Tomagochi(name,health,satiety,strength,money,happiness);
                                  
                                //динамический  вывод  данных на страницу 

                                    $("td.OutPutName").empty();
                                    $("td.OutPutName").append("имя:"+Tomagochi_1._name);
                                    
                                    setTimeout(function run() {

                                        $("td.OutPutHealth").empty();
                                        $("td.OutPutSatiety").empty();
                                        $("td.OutPutStrength").empty();
                                        $("td.OutPutMoney").empty();
                                        $("td.OutPutHappiness").empty();


                                        Tomagochi_1._health=parseInt(Tomagochi_1._health)-1;
                                        Tomagochi_1._satiety=parseInt(Tomagochi_1._satiety)-1;
                                        Tomagochi_1._strength=parseInt(Tomagochi_1._strength)-1;
                                        Tomagochi_1._money=parseInt(Tomagochi_1._money)-1;
                                        Tomagochi_1._happiness=parseInt(Tomagochi_1._happiness)-1;

                                        if(parseInt(Tomagochi_1._health)==0){
                                            $("td.OutPutHealth").append(Tomagochi_1._health);
                                            $("td.OutPutSatiety").append(Tomagochi_1._satiety);
                                            $("td.OutPutStrength").append(Tomagochi_1._strength);
                                            $("td.OutPutMoney").append(Tomagochi_1._money);
                                            $("td.OutPutHappiness").append(Tomagochi_1._happiness);

                                            $("td.emoTomagochi").empty();
                                            $("td.emoTomagochi").append($('<img>',{id:'theImg',src:'IMAGE/0.png'}));

                                            alert("Томагочи умер!!!");
                                            return;
                                        }
                                        else if(parseInt(Tomagochi_1._health)<=15){
                                            $("td.OutPutHealth").append(Tomagochi_1._health);
                                            $("td.OutPutSatiety").append(Tomagochi_1._satiety);
                                            $("td.OutPutStrength").append(Tomagochi_1._strength);
                                            $("td.OutPutMoney").append(Tomagochi_1._money);
                                            $("td.OutPutHappiness").append(Tomagochi_1._happiness);

                                            $("td.sayTomagochi").empty();
                                            $("td.sayTomagochi").append("Хозяин!!!Томагочи умирает!!");

                                            $("td.emoTomagochi").empty();
                                            $("td.emoTomagochi").append($('<img>',{id:'theImg',src:'IMAGE/0.png'}));
                                            


                                        }
                                        else if(parseInt(Tomagochi_1._health)<=30){
                                            $("td.OutPutHealth").append(Tomagochi_1._health);
                                            $("td.OutPutSatiety").append(Tomagochi_1._satiety);
                                            $("td.OutPutStrength").append(Tomagochi_1._strength);
                                            $("td.OutPutMoney").append(Tomagochi_1._money);
                                            $("td.OutPutHappiness").append(Tomagochi_1._happiness);

                                            $("td.sayTomagochi").empty();
                                            $("td.sayTomagochi").append("Томагочи заболел!!");
                                            
                                            $("td.emoTomagochi").empty();
                                            $("td.emoTomagochi").append($('<img>',{id:'theImg',src:'IMAGE/1.png'}));
                                        }
                                        else if ((Tomagochi_1._health)>30&&(Tomagochi_1._happiness)>80){
                                            $("td.OutPutHealth").append(Tomagochi_1._health);
                                            $("td.OutPutSatiety").append(Tomagochi_1._satiety);
                                            $("td.OutPutStrength").append(Tomagochi_1._strength);
                                            $("td.OutPutMoney").append(Tomagochi_1._money);
                                            $("td.OutPutHappiness").append(Tomagochi_1._happiness);

                                            $("td.sayTomagochi").empty();
                                            $("td.sayTomagochi").append("Хозяин !!Томагочи в счастлив))))!!");

                                            $("td.emoTomagochi").empty();
                                            $("td.emoTomagochi").append($('<img>',{id:'theImg',src:'IMAGE/8.png'}));
                                        }

                                        else if(parseInt(Tomagochi_1._health)>30){
                                            $("td.OutPutHealth").append(Tomagochi_1._health);
                                            $("td.OutPutSatiety").append(Tomagochi_1._satiety);
                                            $("td.OutPutStrength").append(Tomagochi_1._strength);
                                            $("td.OutPutMoney").append(Tomagochi_1._money);
                                            $("td.OutPutHappiness").append(Tomagochi_1._happiness);

                                            $("td.sayTomagochi").empty();
                                            $("td.sayTomagochi").append("Томагочи в норме))))!!");

                                            $("td.emoTomagochi").empty();
                                            $("td.emoTomagochi").append($('<img>',{id:'theImg',src:'IMAGE/2.png'}));
                                        }
                                                                        
                                    setTimeout(run, 1000);
                                    }, 1000);
                                        
                                // клик кушать
                                $(".toFeed").on("click", function(){
                                    Tomagochi_1._ToFeed();
    
                                    $("td.OutPutSatiety").empty();
                                    $("td.OutPutSatiety").append( Tomagochi_1._ToFeed());
                                    console.log("клик кормить ");
                                });
    
                                // клик cпортзал 
                                $(".toPlay").on("click", function(){
    
                                    var resultPlay=Tomagochi_1._ToPlay();
                                      
                                
                                    $("td.OutPutHappiness").empty();
                                    $("td.OutPutHappiness").append(resultPlay[0]);
    
                                    $("td.OutPutStrength").empty();
                                    $("td.OutPutStrength").append(resultPlay[1]);

                                    $("td.OutPutHealth").empty();
                                    $("td.OutPutHealth").append(resultPlay[2]);

                                    $("td.OutPutSatiety").empty();
                                    $("td.OutPutSatiety").append(resultPlay[3]);

                                    $("td.OutPutMoney").empty();
                                    $("td.OutPutMoney").append(resultPlay[4]);

                                });

                                // клик работать 
                                $(".toWork").on("click", function(){

                                   var resultWork=Tomagochi_1._ToWork();
                                   
                                   $("td.OutPutHealth").empty();
                                   $("td.OutPutHealth").append(resultWork[1]);

                                   $("td.OutPutMoney").empty();
                                   $("td.OutPutMoney").append(resultWork[0]);

                                   $("td.OutPutSatiety").empty();
                                   $("td.OutPutSatiety").append(resultWork[2]);
                                   
                                });

                                // клик покушать 
                                $(".toFood").on("click",function(){

                                    var resultFood=Tomagochi_1._ToFood();
                               
                                    $("td.OutPutHealth").empty();
                                    $("td.OutPutHealth").append(resultFood[0]);

                                    $("td.OutPutStrength").empty();
                                    $("td.OutPutStrength").append(resultFood[1]);

                                    $("td.OutPutSatiety").empty();
                                    $("td.OutPutSatiety").append(resultFood[2]);
                                });

                                // клик спать 
                                $(".toSleep").on("click", function(){
                                    var resultSleep=Tomagochi_1._ToSleep();

                                    $("td.OutPutHealth").empty();
                                    $("td.OutPutHealth").append(resultSleep[0]);

                                    $("td.OutPutStrength").empty();
                                    $("td.OutPutStrength").append(resultSleep[1]);

                                    $("td.OutPutHappiness").empty();
                                    $("td.OutPutHappiness").append(resultSleep[2]);

                                });

                                $(".toTravel").on("click", function(){
                                    
                                    var resultTravel=Tomagochi_1._toTravel();

                                    $("td.OutPutHealth").empty();
                                    $("td.OutPutHealth").append(resultTravel[0]);

                                    $("td.OutPutStrength").empty();
                                    $("td.OutPutStrength").append(resultTravel[1]);

                                    $("td.OutPutHappiness").empty();
                                    $("td.OutPutHappiness").append(resultTravel[2]);

                                    $("td.OutPutMoney").empty();
                                    $("td.OutPutMoney").append(resultTravel[3]);

                                    $("td.OutPutSatiety").empty();
                                    $("td.OutPutSatiety").append(resultTravel[4]);
                                    
                                });
        
                            }else{
                                alert("error:Вы не ввели показатели счастья");    
                            }

                        }else{
                            alert("error:Вы не ввели показатели денег");    
                        }
                    }else{
                        alert("error:Вы не ввели показатели сылы!!"); 
                    }
                    
                }else{
                    alert("error:Вы не ввели показатели сытости!!"); 
                }
            }else{
                alert("error:Вы не ввели показатели здоровья!!");
            }
        }else{
            alert("error:Вы не ввели имя!!");
        }
    });

    // console.log("jQuery -ok");
}

$(document).ready(mainTomaggochi);












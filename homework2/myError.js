function myObj(){
    key='агус',
    [2]='июнь',
    [3]='агу',
    [4]='июль',
    [5]='агуст',
    [6]='июнь',
    [7]='агуст',
    [8]='аг',
    [9]='агуст',
    [10]='а',
    [11]='агуст',


     myObjFilterSummer888=function(){
        console.log("Найдем и выведем все летние месяцы с помощью метода filter1 : ");
        var myFilter888=[];
       
        for(var key in this){
           
            if(parseInt(key)){
                if(this[key]==='июнь'||this[key]==='июль'||this[key]==='август'){
                    // myFilter+=this[key]+" ; ";
                   
                    return myFilter888.push(this[key]);

                };
            };
        };
        

        console.warn("Результат работы метода \"myFilterSummer1\" :");
        console.warn("ky ky"+myFilter888.length);
        for(var i=0; i<myFilter888.length;i++){
            console.log(myFilter[i]);
        }

        
        return this;

    };
    return this;

};

var Obj1=new myObj();
Obj1.myObjFilterSummer888();



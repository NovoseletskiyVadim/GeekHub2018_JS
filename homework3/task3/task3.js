function chat(s) {
    var myStr=s;
    var myWorld="hello";
    var myResult="";
    var finalResult;

    for(var i=0;i<myWorld.length;i++){
        // myValue1=myWorld[i];
        // console.log("myValue1=",myValue1);

        var a=0;
        for(;a<myStr.length;a++){
            if(myWorld[i]==myStr[a]&&myWorld[i]!=myStr[a+1]){
                myResult=myResult+myStr[a];
            
                console.log("myResult1=",myResult);

                
               
            }
             

        }
    }
    if(myWorld===myResult){
        return finalResult=true;
    }
    else{
        return finalResult=false;
    }
   
}

var result;
result=chat("ahhellllloou");
console.log(result);

 




// еще попытаюсь до  выходных придумать как  for заменить на  foreach..

console.log("Start");

var myRocksWater=[0,10,10,0,5,7,2,0];
// var myRocksWater=[2,1,5,0,3,4,7,2,3,1,0];
// var myRocksWater=[0,1,0,1,0,1,0,1,0,1];
// var myRocksWater=[0,1,2,3,4,5,5,4,3,2,1,0];




var MinValue, startIndex, endIndex=0;
var myResult=0;

for(var i=0; i<myRocksWater.length;i++){

    if(myRocksWater[i]<=myRocksWater[i+1]){
        
        continue;  
    } 


    else if(myRocksWater[i]>myRocksWater[i+1]){

        var myArray=[];
        startIndex=i;
       
        for(;i<myRocksWater.length;i++){
           
            if(myRocksWater[i+1]>= myRocksWater[startIndex]){
                endIndex=i+1;
                break;
            }
            
        }
         
        if(endIndex<=startIndex){

            i=startIndex+1;
            MinValue=myRocksWater[i];
            
            for(;i<myRocksWater.length;++i){
                if(myRocksWater[i]>MinValue&&myRocksWater[i]>myRocksWater[i+1]){
                    endIndex=i; 
                    break;

                }
            }
            myArray=myRocksWater.slice(startIndex,endIndex);
            myArray.reverse();
            var a=0;
            for(;a<myArray.length;a++){
                if(myArray[a]>myRocksWater[i])break;                    
                myResult+=myRocksWater[i]-myArray[a]; 

            }
            
        }else{
            myArray=myRocksWater.slice(startIndex,endIndex);
            var a=0;
            for(;a<myArray.length;a++){
             myResult+=myArray[0]-myArray[a];            
            }
        }        
    }
}

console.log("myResult=",myResult);
console.log("End");












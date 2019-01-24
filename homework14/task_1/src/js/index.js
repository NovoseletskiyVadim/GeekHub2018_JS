
// task a
import numberIteratorgenerator from './infinityNumberGenerator';
for( let element of numberIteratorgenerator() ){

    alert(element);
    
    var myContinue=confirm("Continue?");
    if(myContinue)continue;
    else {
        alert("Finished work script");
        break;
    }
    
}




// task (b)
// import Avto from './avto';

// let myAvto=new Avto('Toyota','Corola 1.33','black','седан',99,1300);

// for(let avto of myAvto){
//     // if (avto.le)
//     console.log(avto);
// }





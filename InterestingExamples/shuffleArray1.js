var myMin,myMax,Y;
myMin=1;
myMax=15;
Y=15;


function random(min,max,l){
    
    var arr = [],
        m = [],
        n = 0;

    if (max - min < l-1) return;
    
    // create array from 1 to 15
    for (var i=0; i<=(max-min); i++){

        m[i] = i + min;

    }

	for (var i=0; i<l; i++) {

        n = Math.floor(Math.random()*(m.length));
       
        arr[i]=m.splice(n,1)[0];

    };
       
    
    return arr;
}
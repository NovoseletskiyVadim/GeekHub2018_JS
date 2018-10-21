//решение.
// приминение метода find при работе с двухмерным массивом
 
console.log("Начало работы метода \"find\"");

var customers=[

  ['Ivanov','Ivan','Ivanovich'],

  ['Petrow','Ivan','Petrovich'],

  ['Chapaj','Vasilij','Ivanovich']

];

customers.forEach((element, parentArrayIndex)=>{

 element.find(

   function(elem, index){

     if (elem === 'Ivan') {

       console.log('Ivan is found on position', parentArrayIndex, index);

       return elem === 'Ivan';

     }

   }

 )

});
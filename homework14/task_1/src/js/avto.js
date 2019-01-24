import AvtoBox from './avtoBox';
import Engine from './engine';
import Personnel from './personnel'

// task 2
// марка модель
export default class Avto{
    constructor(venderName, model,avtoBoxColor,avtoBoxType,civ, v){
        this.venderName=venderName;
        this.model=model;
        this.avtoBox=new AvtoBox(avtoBoxColor,avtoBoxType);
        this.engine=new Engine(civ,v);
        this.personnel=new Personnel();
        this.date=[
            "21.02.13",
            "13.06.17",
            "10.09.14"
        ]

        

    };

    [Symbol.iterator](){
        
        let that=this;

        // console.log(this);
        var index=0;

        let valueOfAvto=Object.values(this);
        let keys=Object.keys(this);
        // console.log("valueOfAvto=",valueOfAvto);
        // console.log("keys=",keys);


        return{

            next(){
                    //если очередное значение нашей колекции это обьект
                    if(typeof valueOfAvto[index]=='object'){
                        // получаем все значения внутри этого обьекта
                        let subObj=Object.values(valueOfAvto[index]);

                        // получаем все  ключи внутри  этого обьекта
                        let subKeys=Object.keys(valueOfAvto[index]);


                        delete valueOfAvto[index];

                        // делаем массив значений
                        valueOfAvto=[...valueOfAvto, ...subObj];

                        // делаеи массив ключей 
                        keys=[...keys, ...subKeys];
                    } 
                    
                    // TODO:    сделать для свойств обьекта если они массивы

                return{
                         value:valueOfAvto[index],
                         done:index++>keys.length              
                };
            }           
           
        }

    }    

}




 

// вариант с видео
// next(){

            //     if(index===valueOfAvto[insideObjectIndex].length){
            //         index=0;
            //         insideObjectIndex++;

            //     }

            //     if(insideObjectIndex===valueOfAvto.length){
            //         return{
            //             value:undefined,
            //             done:true
            //         };
            //     }

            //     return{
                    
            //         value:valueOfAvto[insideObjectIndex],
            //         done:false
            //     }
            // }


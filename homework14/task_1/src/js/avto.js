import AvtoBox from './avtoBox';
import Engine from './engine';
export default Avto;

// task 2
// марка модель
class Avto{
    constructor(venderName, model,avtoBoxColor,avtoBoxType,civ, v){
        this.venderName=venderName;
        this.model=model;
        this.avtoBox=new AvtoBox(avtoBoxColor,avtoBoxType);
        this.engine=new Engine(civ,v);
    };

    [Symbol.iterator](){
        let that=this;
        let keys=null;
        var index=0;
        let insideObjectIndex=0;

        const valueOfAvto=Object.values(this);
        console.log(valueOfAvto);

        

        return{

            next(){
                if (keys==null){
                    // valueOfAvto=Object.values(that);
                    keys = Object.keys(that).sort();
                    console.table(keys.length);
                };
                return{
                    // value:valueOfAvto[index],
                    value: keys[index], 
                    done:index++>=keys.length
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


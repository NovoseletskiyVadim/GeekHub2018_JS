export default AvtoBox;

// тип кузова . цвет
class AvtoBox{
    constructor(avtoBoxColor, avtoBoxType){
        this.avtoBoxColor=avtoBoxColor;
        this.avtoBoxType=avtoBoxType;
    }

    // [Symbol.iterator](){
    //     let that=this;
    //     let keys=null;
    //     var index=0;

    //     let valueOfAvto=null;
    //     console.table(valueOfAvto);

    //     return{
    //         next(){
    //             if (keys==null){
    //                 // valueOfAvto=Object.values(that);
    //                 keys = Object.keys(that).sort();
    //                 // console.table(keys);
    //             };
    //             return{
    //                 // value:valueOfAvto[index],
    //                 value: keys[index], 
    //                 done:index++>=keys.length
    //             };
    //         }
    //     }

    // }    
}

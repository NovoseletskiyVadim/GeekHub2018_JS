


// Определение конструкторов и объектов в модуле

function User (name, age){

    this.name=name;
    this.agr=age;
    this.dissplayName=function(){
        
        console.log(`Имя: ${this.name} Возраст : ${this.age}`);

    }

}

User.prototype.sayHi=function(){


    console.log(`Привет, меня зовут: ${this.name}`);


}

module.exports.User=User;
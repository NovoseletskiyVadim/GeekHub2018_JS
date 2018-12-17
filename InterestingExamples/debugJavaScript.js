


// 1. ‘debugger;’

if (thisThing) {
    debugger;
  }


//   2. Отображение объектов в виде таблиц

var animals = [
    { animal: 'Horse', name: 'Henry', age: 43 },
    { animal: 'Dog', name: 'Fred', age: 13 },
    { animal: 'Cat', name: 'Frodo', age: 18 }
  ];
   
  console.table(animals);


// 3. Замер времени выполнения кода   
console.time('Timer1');
 
var items = [];
 
for(var i = 0; i < 100000; i++){
  items.push({index: i});
}
 
console.timeEnd('Timer1');


// 4. Получение стек-трейса для функции

/*Теперь мы видим, что func1 вызывает func2, которая вызывает
 func4. Func4 создает экземпляр Car, а затем вызывает функцию 
 car.funcX, и т.д.*/ 
 var car;
 var func1 = function() {
   func2();
 }
 
 var func2 = function() {
   func4();
 }
 
 var func3 = function() {
 }
 
 var func4 = function() {
   car = new Car();
   car.funcX();
 }
 var Car = function() {
   this.brand = 'volvo';
   this.color = 'red';
   this.funcX = function() {
     this.funcY();
   }
 
   this.funcY = function() {
     this.funcZ();
   }
 
   this.funcZ = function() {
     console.trace('trace car')
   }
 }
 
 func1();
 
 var car;
 
 var func1 = function() {
   func2();
 }
 
 var func2 = function() {
   func4();
 }
 
 var func3 = function() {
 }
  
 var func4 = function() {
   car = new Car();
   car.funcX();
 }
 
 var Car = function() {
   this.brand = 'volvo';
   this.color = 'red';
 
   this.funcX = function() {
     this.funcY();
   }
 
   this.funcY = function() {
     this.funcZ();
   }
 
   this.funcZ = function() {
     console.trace('trace car');
   }
 }
 
 func1();



//  5. Форматирование минифицированного кода
//Нажмите кнопку {} 
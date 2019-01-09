
/*
    Судя по выводу, свойство microsecond всегда было равно 123459… Или нет?

Если посмотреть на код выше то, очевидно, нет! Это свойство меняется, а консоль нас 
просто дурит.

При «раскрытии» свойств объекта в консоли – браузер всегда выводит их текущие (на момент
     раскрытия) значения.

Так происходит именно потому, что вывод не делает «копию» текущего содержимого, а
 сохраняет лишь ссылку на объект. Запомните эту особенность консоли, в будущем, при
  отладке скриптов у вас не раз возникнет подобная ситуация.

*/ 

var time = {
    year: 2345,
    month: 11,
    day: 10,
    hour: 11,
    minute: 12,
    second: 13,
    microsecond: 123456
  }
  
  console.log(time); // (*)
  time.microsecond++; // (**)
  
  console.log(time);
  time.microsecond++;
  
  console.log(time);
  time.microsecond++;



// console.log();

// %s -строковое состояние 
// %o -обьект 
// %d -decimal / integer

console.log('I like %s but I do not like %s.', 'Skittles', 'pus');

// %c - стили
console.log('I am a %cbutton', 'color: white; background-color: orange; padding: 2px 5px; border-radius: 2px');

// console.dir();

// console.warn();

// console.table();
// > console.table(data, ["id", "price"]);
// !!!! но не более 1000 строк 

// console.assert();
// условие должно быть ложным 
console.assert(tx.buyer !== 'WAL0412', tx);

// console.count()

/*
        работает как счетчик:

    odds: 1
    odds: 2
    prime: 1
    odds: 3
    multiplesOfFive: 1
    prime: 2
    odds: 4
    prime: 3
    odds: 5
    multiplesOfFive: 2

    console.countReset ()-сброс счетчика 

*/ 

for(let i = 0; i < 10000; i++) {
    if(i % 2) {
      console.count('odds');
    }
    if(!(i % 5)) {
      console.count('multiplesOfFive');
    }
    if(isPrime(i)) {
      console.count('prime');
    }
  }



// console.trace()
/*
    что бы выяснить внутри класса или библиотеки,
    какой вызов приводит к багу

*/ 
export default class CupcakeService {
    
    constructor(dataLib) {
      this.dataLib = dataLib;
      if(typeof dataLib !== 'object') {
        console.log(dataLib);
        console.trace();
      }
    }
  
    // ...
  
  }

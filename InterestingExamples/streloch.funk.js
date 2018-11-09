
// example 1
(argument1, argument2, ... argumentN) => {
    // тело функции
}


// example 2
const add = (a, b) => a + b;


// example 3
const getFirst = array => array[0];

// example 4
// для возврата из функции объектного литерала
(name, description)=>({name:name, description:description});


// example 5
// стрелочные функции не имеют собственного контекста выполнения.
// это означает, что они наследуют сущности this и arguments от родительской функции.

const test={
    name:'test',
    createAnonFunction:function(){
        return function(){
            console.log(this.name);
            console.log(arguments);
        };
    },

    createArrowFunction:function(){
        return ()=>{
            console.log(this.name);
            console.log(arguments);
        };
    }
};

/*  result:
    У анонимной функции есть собственный контекст, поэтому, когда
    её вызывают, при обращении к test.name не будет выдано значение 
    свойства name объекта, а при обращении к arguments не будет 
    выведен список аргументов функции

    > anon();
        undefined
        {}

    со стрелочной функцией оказывается, что её контекст совпадает с контекстом
    создавшей её функции, что даёт ей доступ и к списку аргументов, переданных
    этой функцией, и к свойству name объекта, методом которого эта функция является

    > arrow();
        test object
        { '0': 'hello', '1': 'world' }

*/ 

/****************Ситуации, в которых стрелочные функции улучшают код****************/
// 1.Обработка списков значений
const words=['hello','WORLD','Whatever'];
const downCaseWord=words.map(word=>word.toLowerCase());

// 2.работа со свойствами объектов:
this.exaple.array.forEach(element => {
    this.runExample(element);
});

// 3.Трансформация объектов(??????)
export default {
    computed: {
      ...mapState({
        results: state => state.results,
        users: state => state.users,
      })
    }
  }

/************Ситуации, в которых не следует использовать стрелочные функции*********/
// 1.Методы объектов
/*
    Одно время популярным было применение комбинации свойств классов и стрелочных функций 
    для создания методов с «автоматической привязкой», то есть таких, которые могут быть 
    использованы обработчиками событий, но остаются привязанными к классу
*/  
class Counter {
    counter = 0;
  
    handleClick = () => {
      this.counter++;
    }
  }
/*
  При использовании подобной конструкции, даже если функция handleClick вызывалась обработчиком
   событий, а не в контексте экземпляра класса Counter, у этой функции был доступ к данным этого экземпляра
*/

class Counter {
    counter = 0;
  
    handleClick() {
      this.counter++;
    }
  
    constructor() {
      this.handleClick = this.handleClick.bind(this);
    }
}
// 2.Длинные цепочки вызовов
/*
    если все используемые функции объявлены как стрелочные, и эти функции друг друга вызывают,
     то, при возникновении ошибки, разобраться в происходящем будет нелегко
*/ 
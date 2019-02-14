

/*
    3 things you didn’t know about the forEach loop in JS

*/ 


// 1 1. «возврат» не останавливает цикл

/*
    Причина в том, что мы передаем функцию обратного вызова в нашей функции forEach,
     которая ведет себя так же, как нормальная функция, и применяется к каждому элементу, 
     независимо от того, возвращаемся ли мы из одного, то есть когда элемент равен 2 в нашем случае.

*/ 

array = [1, 2, 3, 4];

array.forEach(function (element) {
  console.log(element);
  
  if (element === 2) 
    return;
  
});

// Output: 1 2 3 4

// если переписать код 
const array = [1, 2, 3, 4];

const callback = function(element) {
    console.log(element);
    
    if (element === 2) 
      return; // would this make a difference? no.
}

for (let i = 0; i < array.length; i++) {
    callback(array[i]);
}

// Output: 1 2 3 4


//2 break
// потому что команда break технически не находится в цикле.
const array = [1, 2, 3, 4];

array.forEach(function(element) {
  console.log(element);
  
  if (element === 2) 
    break;
});

// Output: Uncaught SyntaxError: Illegal break statement

// 3 continue
//  он даже не запуститcя, потому что инструкция продолжения не находится в цикле, подобно инструкции прерывания.
const array = [1, 2, 3, 4];

array.forEach(function (element) {
  if (element === 2) 
    continue;
  
  console.log(element);
});

// Output: Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement


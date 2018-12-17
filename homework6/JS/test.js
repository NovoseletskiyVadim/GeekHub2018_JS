var validData = true;

var inputs = document.querySelectorAll('input');

[].forEach.call(inputs, function(input){
    if (input.value === '') {
        validData = false;
         alert( 'Empty ' + input.getAttribute('name'))
    }
});
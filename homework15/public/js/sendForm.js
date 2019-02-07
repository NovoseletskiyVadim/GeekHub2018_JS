

document.getElementById("submit").addEventListener("click", function (e) {

    // console.log("button is ok");

    e.preventDefault();
   // получаем данные формы
   let addForm = document.forms["addForm"];
   let nameProduct = addForm.elements["nameProduct"].value;
    
   let kkalorii = addForm.elements["kkalorii"].value;

//    console.log(nameProduct, kkalorii);
   // сериализуем данные в json
   let info = JSON.stringify({nameProduct: nameProduct, kkalorii: kkalorii});
   let request = new XMLHttpRequest();

   // посылаем запрос на адрес "api/addProduct"
    request.open("POST", "api/addProduct", true);   
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {

        console.log(request.response);   // смотрим ответ сервера
    });
    request.send(info);
    reset();
    alert("Продукт успешно добавлен в базу");
});

function reset(){
    let form=document.forms["addForm"];
    form.reset();
}
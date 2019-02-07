// отправка формы
$("form").submit(function (e) {
    e.preventDefault();
    let id = this.elements["id"].value;
    let maxValue = this.elements["kkalorii"].value;

    saveMaxValue(id, maxValue);
    reset();
    controlValue();
});


function reset(){
    let form=document.forms["maxValueForm"];
    form.reset();
}


function saveMaxValue(maxValueId,value) {

    // console.log('function DeleteUser()=ok');
    // console.log('1 Id=',id);

    $.ajax({
        url: "api/addMaxValue/",
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
            id: maxValueId,
            maxKkal: value,
        }),
        success: function (maxValueKkal) {
            // console.table(maxValueKkal);
            $("p.maxNameMenu").replaceWith("<p class='maxNameMenu'>"+"массим. колчество калорий:"+maxValueKkal.maxValue+' Kkal'+"</p>");
        }
    });
}







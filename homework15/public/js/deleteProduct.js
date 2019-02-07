

$("body").on("click", ".remove", function () {
    // console.table(this);
   
    var id = $(this).data("id");
    // console.log('0 Id=',id);

    DeleteUser(id);
})

// Удаление продукта
function DeleteUser(id) {

    // console.log('function DeleteUser()=ok');
    // console.log('1 Id=',id);

    $.ajax({
        url: "api/listProduct/"+id,
        contentType: "application/json",
        method: "DELETE",
        success: function (product) {
            console.log(product);
            $("tr[data-rowId='" + product._id + "']").remove();
        }
    });
}
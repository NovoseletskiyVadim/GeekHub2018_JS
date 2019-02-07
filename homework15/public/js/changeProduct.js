

// нажимаем на ссылку Изменить
$("body").on("click", ".edit", function () {
    var id = $(this).data("id");
    // console.log('id=',id);
    
    GetUser(id);
});


$(".editForm").submit(function (e) {
    e.preventDefault();
    let id = this.elements["id"].value;
    let product = this.elements["nameProduct"].value;
    let kkal = this.elements["kkalorii"].value;
    
    EditUser(id, product, kkal);
});

function GetUser(id) {
    $.ajax({
        url: "/api/listProduct/"+id,
        type: "GET",
        contentType: "application/json",
        success: function (product) {
            let form = document.forms["editForm"];
            form.elements["id"].value = product._id;
            form.elements["nameProduct"].value = product.product;
            form.elements["kkalorii"].value = product.kkal;
        }
    });
}

function EditUser(productId, productName, productKkal) {
    $.ajax({
        url: "api/listProduct",
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
            id: productId,
            product: productName,
            kkal: productKkal
        }),
        success: function (product) {
            reset();
            // console.table(product);
            $("td[data-product='" + product._id + "']").replaceWith("<td data-product='" + product._id + "'>" + product.product + "</td>");
            $("td[data-kkal='" + product._id + "']").replaceWith( "<td data-kkal='" + product._id + "'>" + product.kkal +' kkal'+ "</td>");
            
        }
    })
}

var row = function (product) {
    
    return "<td data-product='" + product._id + "'>" + product.product + "</td>"
}

function reset() {
    var form = document.forms["editForm"];
    form.reset();
    form.elements["id"].value = 0;
}

function getProducts() {

    // console.log("getProducts() -ok")
    $.ajax({
        url: "/api/listProduct",
        type: "GET",
        contentType: "application/json",
        success: function (products) {

            // очищаем содержимое блока  
            $('.listProduct').empty();

            // console.table(products);

            var $productTable,
            $row_product,
            $td_productId,
            $td_productName,
            $td_productKkall,
            $td_productDeleteButton,
            $td_productToChangeButton,

            $productId,
            $productName,
            $productKkall,

            $productDeleteButton,
            $productToChangeButton;

            $productTable=$('<table>');

            var $row_name=$('<tr>'), 
            $th_num=$('<th>').text('№'),
            $th_id_name=$('<th>').text('id'),
            $th_product_name=$('<th>').text('Название продукта'),
            $th_kkal_name=$('<th>').text('Количество калорий'),
            $th_button_delete=$('<th>'),
            $th_button_change=$('<th>');

            $row_name.append(
                $th_num,
                $th_id_name,
                $th_product_name,
                $th_kkal_name,
                $th_button_delete,
                $th_button_change
            );
            $productTable.append($row_name);



            for(let i=0; i<products.length; i++){

                $row_product=$('<tr>').attr('data-rowId',products[i]._id);
                $td_productNumber=$('<td>')
                $td_productId=$('<td>');
                $td_productName=$('<td>').attr('data-product',products[i]._id);
                $td_productKkall=$('<td>').attr('data-kkal',products[i]._id);
                $td_productToChangeButton=$('<td>');
                $td_productDeleteButton=$('<td>');

                $productNumber=$('<span>')
                                    .text(''+i);
                $productId=$('<span>')
                            .text(''+products[i]._id);
                $productName=$('<span>')
                            .text(''+products[i].product);           
                $productKkall=$('<span>')
                                .text(''+products[i].kkal+' Kkal');
            
                $productDeleteButton=$('<button>').text('Delete')
                                                .attr('data-id',products[i]._id)
                                                .addClass('remove');
                $productToChangeButton=$('<button>').text('Change')
                                                    .attr('data-id',products[i]._id)
                                                    .addClass('edit');

                $td_productNumber.append($productNumber);
                $td_productId.append($productId);
                $td_productName.append($productName);
                $td_productKkall.append($productKkall);
                $td_productDeleteButton.append($productDeleteButton);
                $td_productToChangeButton.append($productToChangeButton);

                $row_product.append(
                                        $td_productNumber,
                                        $td_productId,
                                        $td_productName,
                                        $td_productKkall,
                                        $td_productDeleteButton,
                                        $td_productToChangeButton
                );

                $productTable.append($row_product);
            
            }
            let $nameForListProduct=$('<h3>').text('Полный список продуктов:');
            $('.listProduct').append($nameForListProduct);
            $('.listProduct').append($productTable);
        }
    });
}

$(document).ready(function(){

    getProducts();

});
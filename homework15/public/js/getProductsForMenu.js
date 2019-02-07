function getProductsForMenu() {

    // console.log("getProductsForMenu() -ok")
    $.ajax({
        url: "/api/getProductForMenu",
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
            $td_productAddButton,

            $productId,
            $productName,
            $productKkall,

            $productAddButton,

            $productTable=$('<table>');

            var $row_name=$('<tr>'), 
            $th_num=$('<th>').text('№'),
            $th_id_name=$('<th>').text('id'),
            $th_product_name=$('<th>').text('Название продукта'),
            $th_kkal_name=$('<th>').text('Количество калорий'),
            $th_button_Add=$('<th>');

            $row_name.append(
                $th_num,
                $th_id_name,
                $th_product_name,
                $th_kkal_name,
                $th_button_Add,
            );
            $productTable.append($row_name);



            for(let i=0; i<products.length; i++){

                $row_product=$('<tr>').attr('data-rowId',products[i]._id);
                $td_productNumber=$('<td>')
                $td_productId=$('<td>');
                $td_productName=$('<td>').attr('data-product',products[i]._id);
                $td_productKkall=$('<td>').attr('data-kkal',products[i]._id);
                $td_productAddButton=$('<td>');

                $productNumber=$('<span>')
                                    .text(''+i);
                $productId=$('<span>')
                            .text(''+products[i]._id);
                $productName=$('<span>')
                            .text(''+products[i].product);           
                $productKkall=$('<span>')
                                .text(''+products[i].kkal+' Kkal');
            
                $productAddButton=$('<button>').text('Add')
                                                .attr('data-add',products[i]._id)
                                                .addClass('add');
                

                $td_productNumber.append($productNumber);
                $td_productId.append($productId);
                $td_productName.append($productName);
                $td_productKkall.append($productKkall);
                $td_productAddButton.append($productAddButton);

                $row_product.append(
                                        $td_productNumber,
                                        $td_productId,
                                        $td_productName,
                                        $td_productKkall,
                                        $td_productAddButton,
                );

                $productTable.append($row_product);
            
            }

            let $nameForListProduct=$('<h3>').text('Полный список продуктов:');
            $('.listProduct').append($nameForListProduct);

            $('.listProduct').append($productTable);
        }
    });
}

function getListMenu(){

    // console.log("getistMenu = ok");

    $.ajax({

        url:"/api/getListMenu",
        type:"GET",
        contentType:"application/json",
        success:function(listMenu){

            $('.listMenu').empty();

            // console.table(listMenu);

            let $menuTable=$('<table>').addClass('itemsMenu'),
                $row_name=$('<tr>'),
                $th_product_name=$('<th>').text('Название продукта'),
                $th_kkal_name=$('<th>').text('Количество калорий'),
                $th_button_Delete=$('<th>');
            
            $row_name.append(

                $th_product_name,
                $th_kkal_name,
                $th_button_Delete,
            );

            $menuTable.append($row_name);

            for(let i=0; i<listMenu.length;i++){
                
                let $row_menu=$('<tr>').attr('data-rowId',listMenu[i]._id),

                    $td_menuName=$('<td>').attr('data-menu',listMenu[i]._id),
                    $td_menuKkall=$('<td>').attr('data-kkal', listMenu[i]._id);
                    $td_button_delete=$('<td>');

                 
                    let $menuName=$('<span>').text(''+listMenu[i].name),
                    $menuKkall=$('<span>').text(''+listMenu[i].kkall+' Kkal'),
                    $menuButton=$('<button>').text('Delete')
                                                .attr('data-delete', listMenu[i]._id)
                                                .addClass('delete');

                $td_menuName.append($menuName);
                $td_menuKkall.append($menuKkall);
                $td_button_delete.append($menuButton);

                $row_menu.append(

                    $td_menuName,
                    $td_menuKkall,
                    $td_button_delete

                );

                $menuTable.append($row_menu);

                    

            }

            let $nameForTable=$('<h3>').text('Меню продуктов');
            let $maxKalorii=$('<p>').text('массим. колчество калорий:').addClass('maxNameMenu');
            let $currentKalorii=$('<p>').text('текущее значение калорий:').addClass('currentMenu');
            let $kontrol=$('<p>').addClass('kontrolKalorii');
           
            $('.listMenu').append($nameForTable);
            $('.listMenu').append($maxKalorii);
            $('.listMenu').append($currentKalorii);
            $('.listMenu').append($kontrol);
            $('.listMenu').append($menuTable);


            getMaxValue();
            getCurentValue();
            controlValue();
            
        }

    });


}

function getMaxValue(){

    $.ajax({

        url:"/api/getMaxKalorii/",
        type:"GET",
        contentType:"application/json",
        success:function(oneDoc){

            // console.table('oneDoc.maxValue=', oneDoc.maxValue);            

            $("p.maxNameMenu").replaceWith("<p class='maxNameMenu'>"+"массим. колчество калорий:"+oneDoc.maxValue+' Kkal'+"</p>");
            
        }
    });   


};

function getCurentValue(){
    $.ajax({

        // url:"/api/getCurentValue/",
        url:"/api/addCurrentValue/",
        type:"GET",
        contentType:"application/json",
        success:function(oneDoc){

            console.table('oneDoc.currentValue=', oneDoc.currentValue);            
            $("p.currentMenu").replaceWith("<p class='currentMenu'>"+"текущее. количе  ство калорий:"+oneDoc.currentValue+' Kkal'+"</p>");
            
        }
    });  

};

function controlValue(){

    $.ajax({

        url:"/api/kontrolValues/",
        type:"GET",
        contentType:"application/json",
        success:function(result){

            // console.table('result=', result);
            let max=parseInt(result[0].maxValue);
            let curent=parseInt(result[1].currentValue);
            // console.log('max=',max);
            // console.log('curent=',curent);

            
            if(curent>max){

                let information=curent-max;
                // alert("Внимание !!!! \n превышение калорий на \n"+ information+ " Kkal")
                
                $("p.kontrolKalorii").replaceWith("<p class='kontrolKalorii'>"+"Внимание!!! превышение на :"+information+' Kkal'+"</p>");


            }
            else{
                $("p.kontrolKalorii").replaceWith("<p class='kontrolKalorii'>"+"</p>");

            }
            
            
        }
    });  
}



$(document).ready(function(){



    getProductsForMenu();

    // getMaxValue();

    getListMenu();

});
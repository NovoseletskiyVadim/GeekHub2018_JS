

$('body').on('click', '.add', function(){

    let id=$(this).data('add')
    // console.log('0 Id=',id);
    AddMenuInList(id);
    getCurentValue();
    controlValue();
});

function AddMenuInList(id){

    $.ajax({
       
        url:"api/addListMenu/"+id,
        contentType:"application/json",
        method:"GET",
        success:function(product){
            // console.table(product);

            let $row_menu=$('<tr>').attr('data-rowId',product._id),

            $td_menuName=$('<td>').attr('data-menu',product._id),
            $td_menuKkall=$('<td>').attr('data-kkal', product._id),
            $td_button_delete=$('<td>');

                 
            let $menuName=$('<span>').text(''+product.name),
            $menuKkall=$('<span>').text(''+product.kkall+ ' Kkal'),
            $menuButton=$('<button>').text('Delete')
                                        .attr('data-delete', product._id)
                                        .addClass('delete');

            $td_menuName.append($menuName);
            $td_menuKkall.append($menuKkall);
            $td_button_delete.append($menuButton);

            $row_menu.append(

                $td_menuName,
                $td_menuKkall,
                $td_button_delete

            );

            // $menuTable.append($row_menu);

                $('.itemsMenu').append($row_menu);           
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


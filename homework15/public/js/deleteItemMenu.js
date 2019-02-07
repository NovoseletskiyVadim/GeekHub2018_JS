
$('body').on('click','.delete', function(){

    let id=$(this).data('delete');
    // console.log('id=',id);

    DeleteItemMenu(id);
    getCurentValue();
    controlValue();

});

function DeleteItemMenu(id){

    $.ajax(
        {
            url:'api/listMenu/'+id,
            contentType:'application/json',
            method:'DELETE',
            success:function(itemMenu){
                // console.log(itemMenu);

                $("tr[data-rowId='" + itemMenu._id + "']").remove();

            }
        }
    );
};

function getCurentValue(){
    $.ajax({

        // url:"/api/getCurentValue/",
        url:"/api/addCurrentValue/",
        type:"GET",
        contentType:"application/json",
        success:function(oneDoc){

            // console.table('oneDoc.currentValue=', oneDoc.currentValue);            
            $("p.currentMenu").replaceWith("<p class='currentMenu'>"+"текущее. количе  ство калорий:"+oneDoc.currentValue+' Kkal'+"</p>");
            
        }
    });  

};


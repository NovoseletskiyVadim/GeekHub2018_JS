
$('body').on('click','.delete', function(){

    let id=$(this).data('delete');
    // console.log('id=',id);

    DeleteItemMenu(id);

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
}
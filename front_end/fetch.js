
$(function (){

    // var $item_title = $('#item_title'); 

    $.ajax({
        url: 'http://localhost:4444/api/products',
        type: 'GET',
        dataType: 'json', 
        crossDomain: true,
        success: function(data) {
            console.log(data);
            // $.each(data, function(i, item){
            // });
        }
    });
})




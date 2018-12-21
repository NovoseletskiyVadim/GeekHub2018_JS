
document.getElementById('form_category').addEventListener("submit",getCategoryInformation);

function getCategoryInformation(e){

    e.preventDefault();

    var categoryString=document.getElementById('catalog').value;

    
    if(categoryString.length){
        

        var xhrString="https://andruxnet-random-famous-quotes.p.mashape.com/?cat="+categoryString+"&count=10"



        // variant 1
    
        var xhr = new XMLHttpRequest();

        xhr.open('GET', xhrString, true);
        xhr.setRequestHeader('X-Mashape-Key', 'exGQOqiUDZmshHUXJGtAUoLMQrJwp1Wpkcpjsnr5J0cpyvTAXj');
        xhr.setRequestHeader('Accept', 'application/json');


        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var receivedCategoryData = JSON.parse(xhr.responseText);

                // console.table(receivedCategoryData)
        
        
                for(var i=0;i<receivedCategoryData.length;i++){
        
                    var tr=tableFreeApi.insertRow(i+1);
                    var td_0=tr.insertCell(0).innerText=receivedCategoryData[i].author;
                    var td_1=tr.insertCell(1).innerText=receivedCategoryData[i].category;
                    var td_2=tr.insertCell(2).innerText=receivedCategoryData[i].quote;
                    
                }
                
            }
        }
        
        // end  variant 1

        // variant 2
        // $.ajax({
        //     url : xhrString,
        //     type: 'GET',
        //     beforeSend: function(request) {
        //         request.setRequestHeader('X-Mashape-Key', 'exGQOqiUDZmshHUXJGtAUoLMQrJwp1Wpkcpjsnr5J0cpyvTAXj');
        //         request.setRequestHeader('Accept', 'application/json');

        //     },
        //     success : function(data){
                
        //         for(var i=0;i<data.length;i++){

        //             var tr=tableFreeApi.insertRow(i+1);
        //             var td_0=tr.insertCell(0).innerText=data[i].author;
        //             var td_1=tr.insertCell(1).innerText=data[i].category;
        //             var td_2=tr.insertCell(2).innerText=data[i].quote;
                    
        //         }
            
        //     }
        // });

    }

    

}
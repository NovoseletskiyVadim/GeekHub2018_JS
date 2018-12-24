
document.getElementById('form_category').addEventListener("submit",getGifInformation);

function getGifInformation(e){

    e.preventDefault();

    var gifNameString=document.getElementById('catalog').value.replace(' ','+');

    
    if(gifNameString.length){
        

        var xhrString="http://api.giphy.com/v1/gifs/search?q="+gifNameString+
        "&api_key=h5upGpL1INqGInuVWonyqZBigFZZwaav&limit=5"



        // variant 1
    
        // var xhr = new XMLHttpRequest();

        // xhr.open('GET', xhrString, true);


        // xhr.send();

        // xhr.onreadystatechange = function() {
        //     if (xhr.readyState === 4) {
        //         var receivedGifData = JSON.parse(xhr.responseText);

        //         console.table(receivedGifData);
                
        
        
        //         for(var i=0;i<receivedGifData.data.length;i++){
                    
        //             var gifImage = document.createElement('img');
        //             var mySourse=receivedGifData.data[i].images.original.url;

        
        //             var tr=tableFreeApi.insertRow(i+1);
        //             var td_0=tr.insertCell(0).innerText=receivedGifData.data[i].id;

        //             var td_1=document.createElement('td');
        //             gifImage.setAttribute('src', mySourse);
        //             td_1.appendChild(gifImage);
        //             tr.appendChild(td_1);

                    
        //         }
                
        //     }
        // }
        
        // end  variant 1

        // variant 2
        $.ajax({
            url : xhrString,
            type: 'GET',
            
            success : function(receivedGifData){
                
                for(var i=0;i<receivedGifData.data.length;i++){
                    
                    var gifImage = document.createElement('img');
                    var mySourse=receivedGifData.data[i].images.original.url;

        
                    var tr=tableFreeApi.insertRow(i+1);
                    var td_0=tr.insertCell(0).innerText=receivedGifData.data[i].id;

                    var td_1=document.createElement('td');
                    gifImage.setAttribute('src', mySourse);
                    td_1.appendChild(gifImage);
                    tr.appendChild(td_1);

                    
                }
            
            }
        });

    }

    

}





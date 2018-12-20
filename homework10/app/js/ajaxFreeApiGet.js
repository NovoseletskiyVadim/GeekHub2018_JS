
console.log("ajax free api- ok");

var xhrString="https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10"

// variant 1

var xhr = new XMLHttpRequest();
xhr.open('GET', xhrString, true);
xhr.setRequestHeader('X-Mashape-Key', 'exGQOqiUDZmshHUXJGtAUoLMQrJwp1Wpkcpjsnr5J0cpyvTAXj');
xhr.setRequestHeader('Accept', 'application/json');


xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var receivedWeatherData = JSON.parse(xhr.responseText);

        console.table(receivedWeatherData)


        for(var i=0;i<receivedWeatherData.length;i++){

            var tr=tableFreeApi.insertRow(i+1);
            var td_0=tr.insertCell(0).innerText=receivedWeatherData[i].author;
            var td_1=tr.insertCell(1).innerText=receivedWeatherData[i].category;
            var td_2=tr.insertCell(2).innerText=receivedWeatherData[i].quote;
            
        }

    }
}  

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



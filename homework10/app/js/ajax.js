
document.getElementById('form_address').addEventListener("submit",getNameCity);

function getNameCity(e){

    e.preventDefault();

    var cityString=document.getElementById('name_city').value.replace(' ','+');

    
    if(cityString.length){
        

        var xhrString="http://api.openweathermap.org/data/2.5/weather?q="+cityString+"&APPID=07568a4e6114ef7efd60f6a03a80f830"
    
        var xhr = new XMLHttpRequest();

        xhr.open('GET', xhrString, true);

        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var receivedWeatherData = JSON.parse(xhr.responseText);

                getValueWeatherToRender(receivedWeatherData)
                
            }
        }        
    
    }

}


var body=document.querySelector('body');


// create block "weather"

var divWeatherBlock=document.createElement('div');
divWeatherBlock.className='WeatherBlock'
body.appendChild(divWeatherBlock);


// create  element table

var tableWeatherValue=document.createElement('table');
tableWeatherValue.setAttribute('id','weatherInformation');
divWeatherBlock.appendChild(tableWeatherValue)

// create tr/td 

var trWeather_0=tableWeatherValue.insertRow(0);
var td_0_0=trWeather_0.insertCell(0);//city name
var td_0_1=trWeather_0.insertCell(1);//temmperature now

var trWeather_1=tableWeatherValue.insertRow(1);
var td_1_0=trWeather_1.insertCell(0);//min temp
var td_1_1=trWeather_1.insertCell(1);//max temp


var trWeather_2=tableWeatherValue.insertRow(2);
var td_2_0=trWeather_2.insertCell(0);//name(wind)
var td_2_1=trWeather_2.insertCell(1);//value


var trWeather_3=tableWeatherValue.insertRow(3);
var td_3_0=trWeather_3.insertCell(0);//name(clouds%)
var td_3_1=trWeather_3.insertCell(1);//value


var trWeather_4=tableWeatherValue.insertRow(4);
var td_4_0=trWeather_4.insertCell(0);//name(pressure)
var td_4_1=trWeather_4.insertCell(1);//value


// create element for Free Api
var tableFreeApi=document.getElementById('book');










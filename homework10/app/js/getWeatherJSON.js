

function getValueWeatherToRender(objectWeather){

    var cityName,
        temperatureNow,
        temperatureFrom,
        temperatureTo,
        windSpeed,
        clouds,
        atmospherePressure;

    cityName=objectWeather.name;
    temperatureNow=parseInt( objectWeather.main.temp)-273,15;
    temperatureFrom=parseInt(objectWeather.main.temp_min)-273,15;
    temperatureTo=parseInt(objectWeather.main.temp_max)-273,15;
    windSpeed=objectWeather.wind.speed;
    clouds=objectWeather.clouds.all;
    atmospherePressure=objectWeather.main.pressure;

    td_0_0.innerText=" город  "+cityName;
    td_0_1.innerText=" температура  воздуха сейчас "+temperatureNow +" °С;";
    td_1_0.innerText="диапазон температур: ";
    td_1_1.innerText="от "+temperatureFrom+" °С до "+temperatureTo+" °С;";
    td_2_0.innerText="скорость ветра:";
    td_2_1.innerText=windSpeed+" м/с;";
    td_3_0.innerText="облачность:";
    td_3_1.innerText=clouds+" % ;";
    td_4_0.innerText="атмосферное давление: "
    td_4_1.innerText=atmospherePressure+" hpa;"
}
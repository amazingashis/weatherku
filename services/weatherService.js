var WeatherData = require('../models/Weather');

_this = this;

exports.getWeather = async function () {
    var id;
    try {
        var data = {
            id: -1
        };
        var weatherData = await WeatherData.find(id).sort(data).limit(1);
        return weatherData;
    } catch (e) {
        throw e;
    }
}
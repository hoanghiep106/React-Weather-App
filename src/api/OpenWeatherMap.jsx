var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9df406eed86122f1f1b60f97eecbd4d6&q=';

//9df406eed86122f1f1b60f97eecbd4d6

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = OPEN_WEATHER_MAP_URL + encodedLocation + '&units=metric';

        return axios.get(requestUrl).then(function (res) {
            if(res.data.code && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}
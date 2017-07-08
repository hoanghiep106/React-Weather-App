
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9df406eed86122f1f1b60f97eecbd4d6&q=';

//9df406eed86122f1f1b60f97eecbd4d6

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = OPEN_WEATHER_MAP_URL + encodedLocation + '&units=metric';

        return fetch(requestUrl, {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json()
            }
        });
    }
}
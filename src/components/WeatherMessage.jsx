var React = require('react')

var WeatherMessage = ({location, temp}) => (
    <h3>The temperature in {location} is {temp} degree C</h3>
);

module.exports = WeatherMessage;
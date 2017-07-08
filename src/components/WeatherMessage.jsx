var React = require('react')

var WeatherMessage = ({location, temp}) => (
    <h4 className="text-center">It's {temp} in {location} now.</h4>
);

module.exports = WeatherMessage;
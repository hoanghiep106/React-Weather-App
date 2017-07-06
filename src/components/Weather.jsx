var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather =  React.createClass({
    getInitialState: function() {
        return {
            isLoading: false 
        }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({
            isLoading: true
        })
        OpenWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                isLoading: false,
                location,
                temp
            });
        }, function(error) {
            that.setState({
                location: '',
                temp: '',
                isLoading: false
            });
            alert(error);
        });
    },
    render: function() {
        return (
            <div>
                <h3>Weather App</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {this.state.isLoading ? 
                <h3>Loading weather</h3> 
                :
                (this.state.location && this.state.temp ?
                <WeatherMessage location={this.state.location} temp={this.state.temp}/>
                :
                null
                )
                }
            </div>
        );
    }
});

module.exports = Weather;
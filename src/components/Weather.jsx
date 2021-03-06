var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal')

var Weather =  React.createClass({
    getInitialState: function() {
        return {
            isLoading: false 
        }
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '';
        }
    },
    handleSearch: function(location) {
        var that = this;
        that.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        })
        OpenWeatherMap.getTemp(location).then((response) => {
            if(response.cod && response.message) {
                that.setState({
                    isLoading: false,
                    errorMessage: response.message
                });
            } else {
                that.setState({
                    isLoading: false,
                    location: location,
                    temp: response.main.temp
                })
            }
        })
    },
    render: function() {
        return (
            <div>
                <h1 className="text-center page-title">Weather App</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {this.state.isLoading ? 
                <h3 className="text-center">Loading weather</h3> 
                :
                (this.state.location && this.state.temp ?
                <WeatherMessage location={this.state.location} temp={this.state.temp}/>
                :
                ""
                )
                }
                {typeof this.state.errorMessage === 'string' ? 
                <ErrorModal message={this.state.errorMessage}/>
                :
                ""
                }
            </div>
        );
    }
});

module.exports = Weather;
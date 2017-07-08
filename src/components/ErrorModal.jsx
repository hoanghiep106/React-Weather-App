var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string
    },
    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{this.props.title}</h4>
                <p>{this.props.message}</p>
                <button className="button holllow" data-close="">
                    Okay
                </button>
                    
            </div>
        );
    }
})

module.exports = ErrorModal
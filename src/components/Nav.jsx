var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => (
    <div>
        <h2>Nav component</h2>
        <IndexLink to="/" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
);

module.exports = Nav; 
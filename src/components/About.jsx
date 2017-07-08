var React = require('react')

var About =  (props) => (
    <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application build on React</p>
        <p>Here are some of the tools I used:</p>
        <ul>
            <li>
                <a target="_blank" href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
            </li>
            <li>
                <a target="_blank" href="https://openweathermap.org">Open Weather Map</a> - This was the wather API used.
            </li>
        </ul>
    </div>
);

module.exports = About;
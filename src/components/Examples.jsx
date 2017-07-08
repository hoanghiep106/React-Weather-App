var React = require('react')
var {Link} = require('react-router');

var Examples = props => (
    <div>
        <h1 className="text-center page-title">Examples page</h1>
        <p>Here are a few wxample locations to try out</p>
        <ol>
            <li>
                <Link to='/?location=Philadenphia'>Philadenphia, PA</Link>
            </li>
            <li>
                <Link to='/?location=Hochiminh'>Hochiminh City</Link>
            </li>
        </ol>
    </div>
);

module.exports = Examples;
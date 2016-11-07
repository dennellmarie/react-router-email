var React = require('react');
//{props.children}
var App = function(props) {
    console.log("here?")
    return (
        <div>
            <h1>
                Email App
            </h1>
            <div>
                <p>Welcome to email app</p>
                {props.children}
            </div>
        </div>
    );
};

module.exports = App;
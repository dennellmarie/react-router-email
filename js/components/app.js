var React = require('react');
var router = require('react-router');
var Link = router.Link;
// {props.children}
var App = function(props) {
    
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
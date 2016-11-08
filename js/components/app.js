import React, { PropTypes } from 'react';

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

App.propTypes = {
    // React.PropTypes
    children: PropTypes.node.isRequired
}

module.exports = App;
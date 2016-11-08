require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory as HashHistory, IndexRoute } from 'react-router';


var App = require('./components/app');
var Home = require('./components/Home');
var EmailListContainer = require('./components/EmailListContainer');
var Email = require('./components/Email');

//line 22 changed path so that it's the url + parameter
var routes = (
    <Router history={HashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/inbox" > 
            <IndexRoute component={EmailListContainer} mailbox="inbox" />
            <Route path=":id" component={Email} mailbox="inbox" />
          </Route>
  		    <Route path="/spam" >
            <IndexRoute component={EmailListContainer} mailbox="spam" />  
            <Route path=":id" component={Email} mailbox="spam" />        
          </Route>
        </Route>
    </Router>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
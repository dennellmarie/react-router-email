require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var App = require('./components/app')
var EmailListContainer = require('./components/EmailListContainer')


console.log("here?")
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={EmailListContainer} />
          <Route path="/inbox" component={EmailListContainer} mailbox="inbox" />
          <Route path="/spam" component={EmailListContainer} mailbox="spam" />   
        </Route>
    </Router>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
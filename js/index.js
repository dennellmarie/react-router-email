require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var App = require('./components/app');
var Home = require('./components/Home');
var EmailListContainer = require('./components/EmailListContainer');
var Email = require('./components/Email');


var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/inbox"> 
          	<IndexRoute component={EmailListContainer} mailbox="inbox" />
          	<Route path=":inboxId" component={Email} />
          </Route>

  		<Route path="/spam" component={EmailListContainer} mailbox="spam" />   
        </Route>
    </Router>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
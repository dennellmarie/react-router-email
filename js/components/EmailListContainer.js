var React = require('react');
var INBOX = require('../inbox');
var EmailList = require('./EmailList');

var EmailListContainer = function(props) {

	
	return <EmailList mail={INBOX[props.route.mailbox]} />
}
	

module.exports = EmailListContainer;

//props.route.mailbox string inbox or string spam
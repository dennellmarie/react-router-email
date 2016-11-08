var React = require('react');
var MAILBOX = require('../Mailbox');
var EmailList = require('./EmailList');

var EmailListContainer = function(props) {
	//console.log(props.route.mailbox)
	
	return <EmailList mail={MAILBOX[props.route.mailbox]} />
};
	

module.exports = EmailListContainer;

//props.route.mailbox string inbox or string spam
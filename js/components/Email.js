var React = require('react');
var Mailbox = require('../Mailbox');

var Email = function(props) {
	console.log("Email", props)
	return (
		<div>
			{Mailbox[props.route.mailbox][props.params.id].content}
		</div>
	)
};

module.exports = Email;
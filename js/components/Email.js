var React = require('react');
var Mailbox = require('../Mailbox');

var Email = function(props) {
	return (
		<div>
			{Mailbox.inbox[props.params.id].content}
		</div>
	)
};

module.exports = Email;
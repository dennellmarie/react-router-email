var React = require('react');

var Email = function(props) {
	console.log("?", props)
	return (
		<div>
			{props.inboxId}
		</div>
	)
};

module.exports = Email;
var React = require('react');
var router = require('react-router');
var Link = router.Link;
var Email = require('./Email');

//email is our ending point and we don't know what to put into link on line 14

var FilteredEmails = function(props) {
	console.log(props)
	return (

		<div>
			<div>
				<Link to={`/${props.mailbox}/` + props.id}> 
					view email
				</Link>
			</div>
			<div>
				{props.title}
			</div>
			<div>
				{props.to}
			</div>
			<div>
				{props.from}
			</div>
		</div>

	)
};

module.exports = FilteredEmails;
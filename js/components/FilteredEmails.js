var React = require('react');
var router = require('react-router');
var Link = router.Link;
var Email = require('./Email');

//email is our ending point and we don't know what to put into link on line 14

var FilteredEmails = function(props) {
console.log("PROPS??", props)
	return (

		<div>
			<div>
				<Link to={'/inbox/:inboxId'}>

					hi hi hi
				</Link>
			</div>
			
			<div>
				{props.to}
			</div>
			
			<div>
				{props.title}
			</div>
			
		</div>

	)
};

module.exports = FilteredEmails;
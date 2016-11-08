var React = require('react');
var FilteredEmails = require('./FilteredEmails');

var EmailList = function(props) {

	var keys = Object.keys(props.mail)

	var keysToNumber = keys.map(function(key) {
		return parseInt(key)
	})
		
	var mail = keysToNumber.map(function(key, index) {
		return (
			<li key={index}>
				<FilteredEmails id={props.mail[key].id} 
					from={props.mail[key].from} 
					to={props.mail[key].to} 
					title={props.mail[key].title} 
					content={props.mail[key].content}
				/>
			</li>
		)
	})
	return (
	    <ul>
	  		{mail}
	    </ul>
	)
};



module.exports = EmailList;
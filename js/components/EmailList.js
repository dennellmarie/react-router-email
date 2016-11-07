var React = require('react');
var FilteredEmails = require('./FilteredEmails');

var EmailList = function(props) {

	var array = Object.keys(props.mail)
	var singleArray = array.map(function(thing) {
		return thing
		// var index = parseInt(thing)
		// console.log(typeof index)
		// console.log(props.mail[index])
	})


	var keys = Object.keys(props.mail)

	var keysToNumber = keys.map(function(key) {
		return parseInt(key)
	})
		

	// var test = keysToNumber.map(function(key, index) {
	// 	console.log(props.mail)
	// 	return key
	// }
	// console.log("arra-ified", )
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